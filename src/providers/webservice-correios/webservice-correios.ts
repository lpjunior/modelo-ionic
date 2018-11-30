import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WebserviceCorreiosProvider {

  private basePath = 'https://viacep.com.br/ws/';

  constructor(public http: Http) { }

  findAddressByCep(cep:string) {
    return this.http.get(this.basePath + cep + '/json/');
  }

  locateAddressByData(uf:string, cidade:string, logradouro:string) {
    return this.http.get(this.basePath + uf + '/' + cidade + '/' + logradouro + '/json/');
  }
}
