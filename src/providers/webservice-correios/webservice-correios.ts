import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class WebserviceCorreiosProvider {

  private basePath = '/correios';

  constructor(public http: Http, public plt: Platform) { 
    // verifica se o projeot está rodando a partir de um device (windows, android, ios)
    if(this.plt.is('cordova')) {
      this.basePath = 'https://viacep.com.br/ws/';
    }
  }

  findAddressByCep(cep:string) {
    return this.http.get(`${this.basePath}/${cep}/json/`);
  }

  locateAddressByData(uf:string, cidade:string, logradouro:string) {
    return this.http.get(`${this.basePath}/${uf}/${cidade}/${logradouro}/json/`);
  }
}
