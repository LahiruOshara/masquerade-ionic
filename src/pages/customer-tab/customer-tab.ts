import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {CameraPage} from '../camera/camera';
import {SettingsPage} from '../settings/settings'

@IonicPage()
@Component({
  selector: 'page-customer-tab',
  templateUrl: 'customer-tab.html',
})
export class CustomerTabPage {
  tab1Root = ProfilePage;
  tab2Root = CameraPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerTabPage');
  }

}
