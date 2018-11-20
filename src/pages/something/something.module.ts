import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SomethingPage } from './something';

@NgModule({
  declarations: [
    SomethingPage,
  ],
  imports: [
    IonicPageModule.forChild(SomethingPage),
  ],
})
export class SomethingPageModule {}
