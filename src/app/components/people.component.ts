import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { People } from "../models/people";
import 'rxjs/add/operator/toPromise';
import { Router } from "@angular/router/router";
import { UtilsService } from "../services/utils.service";

@Component({
    selector: 'app-people',
    templateUrl: '../html/people.component.html',
    styleUrls: [ '../css/people.component.css' ]
   })
 
export class PeopleComponent {
    people : People[];

   constructor( private utilsService: UtilsService) { }
    
//    url = 'http://localhost/desarrollo/api-rest.php';
   // getPeople(): void{
        //this.utilsService.getPeople().then(people => this.people = people);
     //   console.log('Get People.');
   // }
    

} 
  