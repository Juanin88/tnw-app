import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { People } from "../models/people";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilsService {
    private url = 'http://localhost/desarrollo/api-rest.php';
    private body = {
            'nombre' : 'Denis',
            'ap' : 'Hernandez'
    };

    constructor( private http: Http ) { }

    getPeopleFETCH(): Promise<People[]> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch( this.url , {
            method: 'post',
            headers: headers,
            body: JSON.stringify(this.body),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(result => result);
        
    }

    getPeoplePOST(): Promise<People[]> {

      return this.http.post(this.url, this.body )
      .toPromise()
      .then(response => response.json())
      .then(result => result)
      .catch(this.handleError);
     
  }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}