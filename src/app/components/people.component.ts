import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { People } from "../models/people";
import { Router } from "@angular/router/router";
import { UtilsService } from "../services/utils.service";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-people',
    templateUrl: '../html/people.component.html',
    styleUrls: [ '../css/people.component.css' ]
   })
 
export class PeopleComponent {
    peoplesFETCH : People[];

    peoplesPOST : People[];
   
   constructor( private utilsService: UtilsService) {
       
   }

   getPeopleFETCH(): void{
        this.utilsService.getPeopleFETCH().then(people => this.peoplesFETCH = people);
    }
   
   getPeoplePOST(): void{
       this.utilsService.getPeoplePOST().then(people => this.peoplesPOST = people);
   }

}
  