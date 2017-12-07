import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private _http: Http) { }
    
    loginTNW( usuario:string , password: string) {
    //let urlString: string = 'http://preproduccion.travelnet.com.mx/package/api/method/loginTNW';
    let urlString: string = 'http://localhost/tnw/html/package/api/method/loginTNW';
    
    
    
        const body = {
                usuario : usuario,
                password : password
        };

        return this._http.post( urlString, body ).subscribe(
            data => {
                console.log(data)
            });
        
/*        req.subscribe( data => {
            this.responseLogin = data;
            //this.storage = this.responseLogin.RESPONSE.SESSION.Zend_Auth.storage;      
            
        });
        
        return this.responseLogin;*/
    }
}  


