import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
                    public googlePlus:GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.googlePlus.login({
      'webClientId': '186719375807-fo7mmj7lbd705jopdj7ae4679v1ioik0.apps.googleusercontent.com',
      'offline':true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(success =>{
          alert("login success"+firebase.auth().currentUser);
          alert("success"+success);
      }).catch(err => {
        alert("login unsuccessful"+err)
      })
    })
  }

}
