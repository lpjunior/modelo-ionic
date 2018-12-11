import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadImagemProvider {

  constructor(public http: Http) {}
}
