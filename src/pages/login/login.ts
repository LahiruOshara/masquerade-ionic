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
  d_password:AngularFireList<any>
  users: AngularFireList<any>;
  f_email:string;
  f_password:string;
  current_user:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FirebaseServiceProvider,
    private db:AngularFireDatabase
    ) {}

    onLoginSubmit(){
        
        this.db.list('/user', ref => ref.orderByChild('email').equalTo(this.f_email)).valueChanges().subscribe(x => {
          this.current_user = x[0];
          console.log(this.current_user);
          this.navCtrl.push('HomePage');
      });
    
   
  
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
