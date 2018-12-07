import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WebserviceCorreiosProvider } from "../../providers/webservice-correios/webservice-correios";
import { UserProvider } from "../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
  providers: [
    WebserviceCorreiosProvider,
    UserProvider
  ]
})
export class CadastrarPage {

  nome:string;
  email:string;
  telefone:string;
  cep:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  estado:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wsCProvider: WebserviceCorreiosProvider, private usrPvr: UserProvider, private toast: ToastController) {
  }

  ionViewDidLoad() { }

  fillAddress() {
    if(this.cep.length == 8) {
      this.wsCProvider.findAddressByCep(this.cep).subscribe(
        data=>{
          let resultado = (data as any)._body;
          let json = JSON.parse(resultado);
          this.logradouro = json.logradouro;
          this.bairro = json.bairro;
          this.cidade = json.localidade;
          this.estado = json.uf;
        },
        error=>{
          console.log((error as any)._body);
        }
      );
    }
  }

 createAccount() {
    this.usrPvr.setUser(this.nome, this.email, this.telefone)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. ', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
