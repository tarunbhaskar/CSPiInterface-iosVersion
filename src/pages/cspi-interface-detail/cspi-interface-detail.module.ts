import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CSPIInterfaceDetail } from './cspi-interface-detail';

@NgModule({
  declarations: [
    CSPIInterfaceDetail,
  ],
  imports: [
    IonicPageModule.forChild(CSPIInterfaceDetail),
  ],
})
export class CSPIInterfaceDetailModule {}
