import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupData } from '../signup';

@Component({
  selector: 'app-signupcomponent',
  imports: [ReactiveFormsModule],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.scss',
})
export class Signupcomponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['',Validators.required],
      age : [null, [Validators.required, Validators.min(16)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      address : [''],
      phone : [''],
      zipcode : [''],
      avatar : [''],
      gender : ['MALE', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData : SignupData = this.signupForm.value;
      console.log('Form submited', formData)
    }
  }

  
  

}
