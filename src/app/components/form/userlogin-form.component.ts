import { Component } from '@angular/core';

import { User }    from '../../models/user';
import { HttpClient } from "@angular/common/http";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'userlogin-form',
  templateUrl: '../../html/form/userlogin-form.component.html'
})

export class UserloginFormComponent {

  model = new User('juanin','12345678');
  responseLogin;
  storage;
  
  constructor(private http: HttpClient, private loginService: LoginService) { }
  
//urlString = 'http://localhost/tnw/html/package/api/method/loginTNW';

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  login () {
      this.loginService.loginTNW(this.model.usuario, this.model.password);
  }
  

  
// TODO: Remove this when we're done
// get diagnostic() { return JSON.stringify(this.model); }
//  login() {
//
//      const body = {
//              usuario : this.model.usuario,
//              password : this.model.password
//      };
//      
//      var datos ;
//
//      const req = this.http.post( this.urlString, body );
//      
//      req.subscribe( data => {
//          this.responseLogin = data;
//          this.storage = this.responseLogin.RESPONSE.SESSION.Zend_Auth.storage;
//          
//          if ( this.responseLogin.RESPONSE.status_login ) {
//              alert('suseful!');
//              
//          } 
//          
//      });
//  }
//  
  
  
  
  
  
}