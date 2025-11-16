import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : "",
    redirectTo : "main",
    pathMatch : "full"
  },
  {
    path : "main",
    loadComponent : () => import("./main/main").then(com => com.Main)
  },
  {
    path : "cart",
    loadComponent : () => import("./cart/cart").then(com => com.Cart)
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
