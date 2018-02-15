var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var CSPIInterfaceService = (function () {
    function CSPIInterfaceService(http) {
        this.http = http;
        //private url : string ="../assets/risk.json";
        this.url = 'https://sheetsu.com/apis/v1.0/a0ffe6173f26';
    }
    CSPIInterfaceService.prototype.getData = function () {
        return this.http.get(this.url)
            .map(function (res) {
            return res.json();
        });
    };
    ;
    CSPIInterfaceService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CSPIInterfaceService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return CSPIInterfaceService;
}());
CSPIInterfaceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CSPIInterfaceService);
export { CSPIInterfaceService };
//# sourceMappingURL=cspi-interface-service.js.map