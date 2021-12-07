import { Component } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tab1', 
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})  
export class Tab1Page {
  data: { heading: string; para1: string; para2: string; };
  
  constructor(public alertController: AlertController, public navCtrl: NavController) {
      // loop  de imagens 

    // for(let index = 0; index <= 1; index++){
    //   this.cards.push({
    //     horario: 10,
    //     titulo : 'Publicação ' + index,
    //     foto: "https://picsum.photos/200/300?random=" + index,
    //   });
    // }

  
  }

  cards = [];
  link: string;
  titulo: string;
  description: string;
  cardsId= 0;
  music = false;

  postagem = [
    { 
      description :"",
    }
  ];
  







//adesao de imagem

  nomes = {
    nome : 'Poste sua foto',
    idade : 20,
  };
   formular(){
      if( this.titulo === undefined || this.link === undefined ){
        Swal.fire(
          'ERRO!',
          'Preencha os campos obrigatórios',
          'error'
        )
      } else {
        this.cardsId += 1;
        this.cards.push({
          id: this.cardsId,
          titulo : this.titulo,
          foto: this.link,
          description: this.description,
      })
      this.titulo = undefined;
      this.link = undefined;
      this.description = undefined;
      Swal.fire(
        'Bom trabalho!',
        'Registrado com sucesso!',
        'success'
      )
      }
  }
    apagar(cardObj){
      Swal.fire({
        title: 'Tem certeza que deseja apagar?',
        showDenyButton: true,
        confirmButtonText: 'Apagar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Apagado!', '', 'success')
          this.cards = this.cards.filter(card => card.id !== cardObj.id);
        } 
      })
    }
    trocarPagina() {
     
         this.navCtrl.navigateForward("/tabs/tab2"); 
    }
}