import { Component, effect, signal, Signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { AuthSignal} from '../services/authsignal';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private auth : AuthSignal){
    effect(() => {
      this.isAuth.set(this.auth.isAuthorised())
    })
    
  }



    isAuth= signal(false)

   logout(){
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      this.auth.logout()
  }


  main() {
    window.location.href = "./main"
  }

  

}
