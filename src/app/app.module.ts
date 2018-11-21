import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { StartpagePage } from '../pages/startpage/startpage';

//adding camera module
import { Camera } from '@ionic-native/camera';

//file module
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
//http
import { HTTP } from '@ionic-native/http';

import {AngularFireModule } from 'angularfire2';
//import {environment} from '../environments/environment';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

//tabs
import {ProfilePage} from '../pages/profile/profile';
import {CameraPage} from '../pages/camera/camera';
import {SettingsPage} from '../pages/settings/settings'

import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


const firebaseConfig = {
  apiKey: "AIzaSyA1aY3IPoLyXIer22lO9StLP8GFUUFoaao",
  authDomain: "masquerade-5944f.firebaseapp.com",
  databaseURL: "https://masquerade-5944f.firebaseio.com",
  projectId: "masquerade-5944f",
  storageBucket: "masquerade-5944f.appspot.com",
  messagingSenderId: "422641143157"
};

@NgModule({
  declarations: [
    MyApp,
    StartpagePage,
    ProfilePage,CameraPage,SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartpagePage,
    ProfilePage,CameraPage,SettingsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,FileTransfer, File,HTTP,FirebaseServiceProvider,
    Base64ToGallery
  ]
})
export class AppModule {}
