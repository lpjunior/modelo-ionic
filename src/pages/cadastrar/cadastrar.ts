import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceCorreiosProvider } from "../../providers/webservice-correios/webservice-correios";

/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
  providers: [
    WebserviceCorreiosProvider
  ]
})
export class CadastrarPage {

  nome:string;
  email:string;
  telefone:string;
  cep:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wsCProvider: WebserviceCorreiosProvider) {
  }

  ionViewDidLoad() { }

  fillAddress() {
    if(this.cep.length == 8) {
      this.wsCProvider.findAddressByCep(this.cep).subscribe(
        data=>{
          let resultado = (data as any)._body;
          let json = JSON.parse(resultado);
          this.logradouro = json.logradouro;
          this.bairro = json.bairro;
          this.cidade = json.localidade;
          this.estado = json.uf;
        },
        error=>{
          console.log((error as any)._body);
        }
      );
    }
  }

  createAccount() {

  }
}
