import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1', 
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})  
export class Tab1Page {
  cards = [];
  constructor(public navCtrl: NavController) {
    for(let index = 0; index <= 5; index++){
      this.cards.push({
        horario: 10,
        titulo : 'Notícia' + index,
        foto: "https://picsum.photos/200/300?random=" + index,
      });
    }
}

  nomes = {
    nome : 'Usuário',
    idade : 20,
  };


  
  ir(){
   this.navCtrl.navigateForward("/tabs/tab3");
    
  }


}
