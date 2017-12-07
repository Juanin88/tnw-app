import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { People } from "../models/people";

@Injectable()
export class UtilsService {
    private url = 'http://localhost/desarrollo/api-rest.php';
    private body = {
            'nombre' : 'Denis',
            'ap' : 'Hernandez'
    };

    constructor( private http: Http ) { }

    getPeople(): Promise<People[]> {
        return this.http.post(this.url, this.body )
        .toPromise()
        .then(response => response.json().data as People[]);
    }
    

}