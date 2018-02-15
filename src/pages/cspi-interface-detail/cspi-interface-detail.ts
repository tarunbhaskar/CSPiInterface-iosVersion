import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the CSPIInterfaceDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cspi-interface-detail',
  templateUrl: 'cspi-interface-detail.html',
})
export class CSPIInterfaceDetail {

	private parameter1: any;
	private param1 : any;
  private numSMS : any;
  private showMessageCard : boolean = false;
  private textMessage:string ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private smsVar: SMS) {
  	this.parameter1 = navParams.get('paramPassed');

  	this.param1 = JSON.parse(this.parameter1);
  }

  ionViewDidLoad() {
   
  }

   goBack(){
  	this.navCtrl.pop();
  }

  send(num){
    this.showMessageCard = true;
    this.numSMS = num;
  }

  sendSMS(){
    var options={
          replaceLineBreaks: true
    }
    this.smsVar.send(this.numSMS, this.textMessage ,options)
      .then(()=>{
        alert("Message sent successfully!");
        this.showMessageCard = false;
      },()=>{
      alert("Message not sent");
      this.showMessageCard = false;
      });
  }

  close(){
    this.showMessageCard = false;
  }

}
