import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  user = "";
  password = "";

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    if(this.user == "" && this.password == ""){
      this.navCtrl.navigateForward("/tabs/tab4");
    }else{
     this.navCtrl.navigateForward("/tabs/tab1");
    }
  }

  

}
