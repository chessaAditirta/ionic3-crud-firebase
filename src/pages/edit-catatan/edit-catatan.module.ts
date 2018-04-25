import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCatatanPage } from './edit-catatan';

@NgModule({
  declarations: [
    EditCatatanPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCatatanPage),
  ],
})
export class EditCatatanPageModule {}
