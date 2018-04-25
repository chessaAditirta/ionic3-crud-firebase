import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahCatatanPage } from './tambah-catatan';

@NgModule({
  declarations: [
    TambahCatatanPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahCatatanPage),
  ],
})
export class TambahCatatanPageModule {}
