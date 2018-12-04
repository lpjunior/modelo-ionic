import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceCorreiosProvider } from "../../providers/webservice-correios/webservice-correios";

/**
 * Generated class for the ListAddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-addresses',
  templateUrl: 'list-addresses.html',
  providers: [
    WebserviceCorreiosProvider
  ]
})
export class ListAddressesPage {

  private txtUF:string;
  private txtCidade:string;
  private txtLogradouro:string;

  enderecos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private wsCProvider: WebserviceCorreiosProvider) {
  }

  ionViewDidLoad() {
  }

  ListAddressesPage() {
    if((this.txtUF.length == 2) && (this.txtCidade.length >= 5) && (this.txtLogradouro.length >= 3)) {

      this.wsCProvider.locateAddressByData(this.txtUF, this.txtCidade, this.txtLogradouro).subscribe(
        data=>{
          let resultado = (data as any)._body;
          let json = JSON.parse(resultado);
          this.enderecos = json;
        },
        error=>{
          console.log((error as any)._body);
        }
      );
    }
  }
}
