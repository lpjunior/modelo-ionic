import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    UserProvider
  ]
})
export class HomePage {

  private id:number = 1;
  public user = [];
  constructor(public navCtrl: NavController, private usrPvr: UserProvider) {
    this.showInfo();
  }

  showInfo() {
    this.usrPvr.getUserInfo(this.id).subscribe(
      data=>{
        this.user = JSON.parse((data as any)._body);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
