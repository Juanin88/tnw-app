import { Component } from '@angular/core';

import { User }    from '../../models/user';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'userlogin-form',
  templateUrl: '../../html/form/userlogin-form.component.html'
})

export class UserloginFormComponent {

  model = new User('','');
  results: string[];
  
  constructor(private http: HttpClient) { }

  urlString = 'http://localhost/tnw/html/package/api/method/loginTNW';

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  
  
  login() {
      
      
      const body = {
              usuario : this.model.usuario,
              password : this.model.password
      };
      

      this.http.post( this.urlString, body ).subscribe( data => {
          // Read the result field from the JSON response.
          console.log(data);
      });
  
      //alert(this.model.usuario + " - " + this.model.password); 
     
  }
  
}