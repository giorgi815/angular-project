import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupData } from '../signup';
import { Route, Router } from '@angular/router';
import { Api } from '../../services/apiservices';
import { AuthSignal } from '../../services/authsignal';

@Component({
  selector: 'app-signupcomponent',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.scss',
})
export class Signupcomponent {
  
  constructor(private api: Api, private route: Router, private auth : AuthSignal){}


  signUp(signupform : any){
    console.log(signupform.value);

    this.api.postObject(`https://api.everrest.educata.dev/auth/sign_up`,signupform.value).subscribe({
      next: (resp: any) =>{
        console.log(resp)
        console.log(signupform.value)
        this.route.navigateByUrl('/login')
        this.api.postObject(`https://api.everrest.educata.dev/auth/verify_email`,
          signupform.value.email
          
        ).subscribe({
          next: (resp: any) => {
            console.log(resp)
          },
          error: (error) => {
            console.log(error)
          }
        })
      },
      error: (er) => {
        console.log(er)
      }
    })


  }


  

}
