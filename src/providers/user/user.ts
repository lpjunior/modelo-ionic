import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  private BASE_PATH = "http://localhost/ws/";
  constructor(public http: Http) { }

  getUserInfo(id:number) {
    return this.http.get(this.BASE_PATH + 'index.php?id=' + id);
  }

  getUsersInfo() {
    return this.http.get(this.BASE_PATH);
  }

  setUser(nome:string, email:string, telefone:string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        telefone: telefone
      };
 
      this.http.post(this.BASE_PATH + 'add', data)
        .subscribe(
          (result: any) => {
          resolve(result.json());
          console.log(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
