import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFireDatabase,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegisterSubmit(){
    const user = this.db.list('user');
    user.push ({
      email: this.email,
      password:this.password
    });
    console.log("submitted");
    this.navCtrl.push('LoginPage');
  }

}
