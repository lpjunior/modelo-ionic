import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  slides = [
    {
      title: "Seja Bem Vindo!",
      description: "Este APP tem como finalidade auxiliar os alunos do cursos de programação do Senac Rio.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Senac_logo.svg",
    },
    {
      title: "O que esse APP faz?",
      description: "<b>Tutorial Ionic</b> é um app modelo para ensinar os alunos a criar uma aplicação usando Ionic.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "Quer saber mais sobre o app?",
      description: "Dê uma olhada no nosso <em>GitHub</em>.",
      image: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { }

  /* Método responsável por dar skip no slide de tutorial */
  skipTutorial() {
    this.navCtrl.push(HomePage);
  }
}
