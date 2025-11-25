import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthSignal {

  constructor(){}

  

 isAuthorised = signal<boolean>(!!localStorage.getItem('access'));
  

  

  login(){
    this.isAuthorised.set(true)
  }
  logout(){
    this.isAuthorised.set(false)
  }
  
}
