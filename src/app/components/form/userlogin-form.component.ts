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
  responseLogin: any;
  storage;
  vartest='antes';
  constructor(private http: HttpClient, private loginService: LoginService) { }
  
//urlString = 'http://localhost/tnw/html/package/api/method/loginTNW';

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  login () {
      this.vartest='despúes';
      this.responseLogin = this.loginService.loginTNW(this.model.usuario, this.model.password);
      //this.storage = this.responseLogin.RESPONSE.SESSION.Zend_Auth.storage;
  }  
}