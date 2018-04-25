import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Catatan } from '../../model/catatan/catatan.model';
import { ListCatatanService } from '../../service/list-catatan.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listCatatan : Observable<Catatan[]>;

  constructor(public navCtrl: NavController, 
              private listCatatanService: ListCatatanService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {

  }

  ionViewDidLoad(){
    this.listCatatan = this.listCatatanService.getListCatatan()
    .snapshotChanges()
    .map( change => {
      return change.map( changes =>({
        key: changes.payload.key, ...changes.payload.val()
      }));
    })
  }

  tambahCatatan() : void{
    this.navCtrl.push("TambahCatatanPage");
  }

  editCatatan(param: any) : void {
    this.navCtrl.push("EditCatatanPage", param);
  }

  hapusCatatan(catatan : Catatan){
    this.listCatatanService.hapusCatatan(catatan);
  }

  konfirmasiHapus(data: any) : void {
    
    let confirm = this.alertCtrl.create({
      title   : 'Hapus Data',
      message : 'Apakah anda yakin akan menghapus data '+ data.judul +' ?',
      buttons : [
        {
          text: 'Batal',
          handler: () => {
            this.kirimNotifikasi("Batal menghapus data "+ data.judul);
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.hapusCatatan(data);
          }
        }
      ]
    });
    confirm.present();
  }

  kirimNotifikasi(pesan : string): void {
    let notifikasi = this.toastCtrl.create({
      message       : pesan,
      position      : 'bottom',
      duration      : 3000
  });
  notifikasi.present();
  }

}
