import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Catatan } from '../../model/catatan/catatan.model';
import { ListCatatanService } from '../../service/list-catatan.service';

@IonicPage()
@Component({
  selector: 'page-edit-catatan',
  templateUrl: 'edit-catatan.html',
})
export class EditCatatanPage {

  public catatan : Catatan = {
    judul : '',
    konten: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private listCatatanService: ListCatatanService) {
  }

  ionViewDidLoad() {
    this.catatan = this.navParams.get("catatan");
  }

  updateCatatan(catatan: Catatan){
    this.listCatatanService.editCatatan(catatan).then(() => {
      this.navCtrl.pop();
    });
  }

}
