import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import { AngularFireList} from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string;
  password:string;

  current_user:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FirebaseServiceProvider,
    private db:AngularFireDatabase
    ) {}

    onLoginSubmit(){
        console.log("onlogin");
        this.db.list('/user', ref => ref.orderByChild('email').equalTo(this.email)).valueChanges().subscribe(x => {
          this.current_user = x[0];
          //console.log(this.current_user);
          if(this.current_user.password!=this.password){
            console.log("Wrong password");
          }else{
            this.navCtrl.push('CustomerTabPage');
          }
      });
      /*console.log(this.db.list('/user'));*/
      console.log("done")
  }
    
    gotoReg(){
    /*const user = this.db.list('user');
    user.push ({
      email: this.f_email,
      password:this.f_password
    });*/
    console.log("clicked");
    }

  
  
}
