import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAddressesPage } from './list-addresses';

@NgModule({
  declarations: [
    ListAddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAddressesPage),
  ],
})
export class ListAddressesPageModule {}
