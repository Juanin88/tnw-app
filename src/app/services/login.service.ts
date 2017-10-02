import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Headers, Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import { User }    from '../models/user';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }
    responseLogin;
    storage;

    
//    create(name: string): Promise<Hero> {
//        return this.http
//          .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
//          .toPromise()
//          .then(res => res.json().data as Hero)
//          .catch(this.handleError);
//        }
    
    loginTNW( usuario:string , password: string) {
        const urlString = 'http://localhost/tnw/html/package/api/method/loginTNW';
        const body = {
                usuario : usuario,
                password : password
        };

        const req = this.http.post( urlString, body );
        
        req.subscribe( data => {
            this.responseLogin = data;
            this.storage = this.responseLogin.RESPONSE.SESSION.Zend_Auth.storage;      
        });
    }
}  


