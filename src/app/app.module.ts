import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListCatatanService } from '../service/list-catatan.service'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyCUSKSDsz8w8ftF082Jm5697Hvz1tZtY2M",
  authDomain: "ionic-crud-firebase-f601d.firebaseapp.com",
  databaseURL: "https://ionic-crud-firebase-f601d.firebaseio.com",
  projectId: "ionic-crud-firebase-f601d",
  storageBucket: "ionic-crud-firebase-f601d.appspot.com",
  messagingSenderId: "606364015285"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListCatatanService
  ]
})
export class AppModule {}
