import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { CadastrarPage } from "../cadastrar/cadastrar";
import { ListAddressesPage } from "../list-addresses/list-addresses";
import { ListUsersPage } from "../list-users/list-users";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = CadastrarPage;
    this.tab3 = ListAddressesPage;
    this.tab4 = ListUsersPage;
  }

  ionViewDidLoad() { }

}
