import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Catatan } from '../model/catatan/catatan.model';
 
@Injectable()
export class ListCatatanService {
 
    private catatanRef = this.db.list<Catatan>('list-catatan');
 
    constructor(private db: AngularFireDatabase) { }
 
    getListCatatan() {
        return this.catatanRef;
    }
 
    tambahCatatan(catatan: Catatan) {
        return this.catatanRef.push(catatan);
    }
 
    editCatatan(catatan: Catatan) {
        return this.catatanRef.update(catatan.key, catatan);
    }
 
    hapusCatatan(catatan: Catatan) {
        return this.catatanRef.remove(catatan.key);
    }
}