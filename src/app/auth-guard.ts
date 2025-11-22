import { ElementSchemaRegistry } from '@angular/compiler';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  

  if(localStorage.getItem("access") || localStorage.getItem("refresh")){
    return true
  }
  else{
    router.navigate(["/login"])
    return false
  }

};
