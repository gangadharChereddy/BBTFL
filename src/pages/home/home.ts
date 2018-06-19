import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name:string;
  photoUrl:string;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.name=this.navParams.get('name');
    this.photoUrl=this.navParams.get('photoUrl');
  }

}
