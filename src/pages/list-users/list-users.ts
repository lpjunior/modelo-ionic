import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-list-users',
  templateUrl: 'list-users.html',
  providers: [
    UserProvider
  ]
})
export class ListUsersPage {

  listUsers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private uProvider: UserProvider, private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.carregalista();
  }

  carregalista() {
    this.uProvider.getUsersInfo().subscribe(
      (data: any)=>{
        this.listUsers = JSON.parse(data._body);
      },
      (error: any)=>{
        console.log(error._body);
      }
    );
  }

  openDetails() {
    this.toast.create({ message: 'Página de detalhes.', position: 'botton', duration: 3000 }).present();
  }
}
