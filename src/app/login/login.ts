import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Services } from '../apiservices/services';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private api : Services) { }
 
  // onLogin() {
  //   this.api.login("https://api.everrest.educata.dev/auth").subscribe(data => 
  //     console.log(data)
  //   )
  // }

}
