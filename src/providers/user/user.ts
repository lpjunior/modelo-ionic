import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class UserProvider {

  private basePath = '/ws';

  constructor(public http: Http, public plt: Platform) { 
    // verifica se o projeot está rodando a partir de um device (windows, android, ios)
    if(this.plt.is('cordova')) {
      this.basePath = 'http://localhost/ws';
    }
  }

  getUserInfo(id:number) {
    // interpolação de variáveis
    return this.http.get(`${this.basePath}/index.php?id=${id}`);
  }

  getUsersInfo() {
    return this.http.get(this.basePath);
  }

  setUser(nome:string, email:string, telefone:string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        telefone: telefone
      };
 
      this.http.post(`${this.basePath}/add`, data)
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
