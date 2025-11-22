import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path : "",
    redirectTo : "main",
    pathMatch : "full"
  },
  {
    path : "main",
    loadComponent : () => import("./main/main").then(com => com.Main),
  },
  {
    path : "cart/:id",
    loadComponent : () => import("./cart/cart").then(com => com.Cart),
    canActivate: [authGuard]
  },
  {
    path : "login",
    loadComponent : () => import("./login/login").then(com => com.Login)
  },
  {
    path : "signupcomponent",
    loadComponent : () => import("./signup/signupcomponent/signupcomponent").then(com => com.Signupcomponent)
  },
  {
    path : "details/:id",
    loadComponent : () => import("./details/details").then(com => com.Details)
  },
  {
   path : '**',
   component : Error
  },
  

];
