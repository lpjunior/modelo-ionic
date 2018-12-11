import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadFotoPage } from './upload-foto';

@NgModule({
  declarations: [
    UploadFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadFotoPage),
  ],
})
export class UploadFotoPageModule {}
