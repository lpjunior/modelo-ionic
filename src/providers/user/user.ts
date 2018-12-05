import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  private BASE_PATH = "http://localhost:8080/ws/users/";
  constructor(public http: Http) { }

  getUserinfo(id:number) {
    return this.http.get(this.BASE_PATH + 'id?' + id);
  }

  setUser(nome:string, email:string, telefone:string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        telefone: telefone
      };
 
      this.http.post(this.BASE_PATH + 'add', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
