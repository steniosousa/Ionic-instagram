import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor( public navCtrl: NavController) {}
  detalhes(){
    this.navCtrl.pop();
    console.log("iai")
  }

}
