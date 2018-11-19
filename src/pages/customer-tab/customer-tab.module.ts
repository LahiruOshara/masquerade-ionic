import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerTabPage } from './customer-tab';

@NgModule({
  declarations: [
    CustomerTabPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerTabPage),
  ],
})
export class CustomerTabPageModule {}
