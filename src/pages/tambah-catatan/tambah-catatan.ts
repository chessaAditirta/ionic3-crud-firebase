import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Catatan } from '../../model/catatan/catatan.model';
import { ListCatatanService } from '../../service/list-catatan.service';

@IonicPage()
@Component({
  selector: 'page-tambah-catatan',
  templateUrl: 'tambah-catatan.html',
})
export class TambahCatatanPage {

  public catatan : Catatan = {
    judul : '',
    konten: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private listCatatanService: ListCatatanService
  ) {
  }

  simpanCatatan(catatan : Catatan) {
    this.listCatatanService.tambahCatatan(this.catatan)
    .then((ref: any) => {
      this.navCtrl.pop();
    });
  }

}
