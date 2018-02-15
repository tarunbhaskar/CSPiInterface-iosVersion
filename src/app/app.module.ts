import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {CSPIInterfaceService} from '../providers/cspi-interface-service';
import {SearchText} from '../pipes/search-text';
import { SafeUrl } from '../pipes/safe-url'; 
import {CSPIInterfaceDetail} from '../pages/cspi-interface-detail/cspi-interface-detail';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchText,
    SafeUrl,
    CSPIInterfaceDetail
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CSPIInterfaceDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CSPIInterfaceService,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
