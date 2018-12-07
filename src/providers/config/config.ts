import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false
  }

  constructor() { }

  setConfig(showSlide?:boolean){
    let config = {
      showSlide: false
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    localStorage.setItem("config", JSON.stringify(config));
  }

  getConfig():any{
    return localStorage.getItem("config");
  }
}
