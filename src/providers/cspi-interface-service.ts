import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the CSPIInterfaceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CSPIInterfaceService {

	private data:any;
	//private url : string ="../assets/risk.json";
  private url : string = 'https://sheetsu.com/apis/v1.0/e44d479d622b';

  constructor(public http: Http) {
   
  }

   getData():any{
  
   return this.http.get(this.url)
      .map(res =>
       res.json());
               
 };


private extractData(res: Response) {

  let body = res.json();
  return body || { };
}

private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}

}
