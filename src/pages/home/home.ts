import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CSPIInterfaceService} from '../../providers/cspi-interface-service';
import {SearchText} from '../../pipes/search-text';
import {CSPIInterfaceDetail} from '../../pages/cspi-interface-detail/cspi-interface-detail';

@Component({
  selector: 'page-home',
  styles: [`
    .even { background-color: white;  border-bottom: 1px solid black; }
    .odd { background-color: #e0e0e0;  border-bottom: 1px solid black;}  
     `],
  templateUrl: 'home.html',
  providers: [CSPIInterfaceService]
})
export class HomePage {

	private data : any;
	private term : string = "";
    private errorMessage: string;
    private showSpinner:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public cspiInterfaceService : CSPIInterfaceService) {
  	this.showSpinner = true;

  }

   ngOnInit() {
            this.loadAll();
    }

   loadAll() {  	
    	
   this.cspiInterfaceService.getData().subscribe(data => {
           this.data = data;
           error =>  this.errorMessage = <any>error;

           this.showSpinner = false;
            
       });
    }

   searchFn(ev: any) {
    this.term = ev.target.value;
  }

  showDetails(details){
  	let det = JSON.stringify(details);
  	this.navCtrl.push(CSPIInterfaceDetail , {paramPassed : det});
  }

  onCancel(ev: any){
  	ev.target.value = '';
  }

}
