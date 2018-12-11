import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  constructor() { }

  setConfig(showSlide?:boolean){
    
    let perfil = {
      showSlide: false
    }

    if(showSlide){
      perfil.showSlide = showSlide;
    }

    localStorage.setItem("config", JSON.stringify(perfil));
  }

  getConfig():any{
    return localStorage.getItem("config");
  }

  cleanConfig() {
    localStorage.clear();
  }
}
