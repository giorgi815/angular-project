import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api} from '../services/apiservices';
import { AuthSignal } from '../services/authsignal';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private api : Api, private route: Router, private auth: AuthSignal) { }
 

  logIn(loginForm : any){
    console.log(loginForm.value);

    this.api.postObject('https://api.everrest.educata.dev/auth/sign_in',loginForm.value).subscribe({
      next: (resp : any) => {
        localStorage.setItem('access', resp.access_token)
        localStorage.setItem('refresh', resp.refresh_token)
        this.route.navigateByUrl('/main')
        this.auth.login()
      },
      error: (error) => {
        console.log(error)
      }
    })
  
  }
  
}
