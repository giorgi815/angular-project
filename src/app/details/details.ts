import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../models/productid';
import { Api } from '../services/apiservices';
import { signalGetFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  id! : string
  productId!: SingleProduct

  constructor( private api: Api ,private activatedroute : ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      console.log(data["id"])
      this.id = data["id"]
    })
  }

 
   ngOnInit(){
    this.api.getAll(`https://api.everrest.educata.dev/shop/products/id/${this.id}`)
    .subscribe((resp: any) => {
      // console.log(resp)
      this.productId = resp
      console.log(this.productId)
    })
  }

  cartProducts(){
    this.api.getAll('https://api.everrest.educata.dev/shop/cart').subscribe(resp => {
      console.log(resp)
    })
  }


  cartPost(){
    this.api.postObject("https://api.everrest.educata.dev/shop/cart/product",{
      id: this.id,
      quantity: 1
    }).subscribe((resp: any) => {
        console.log(resp)
    })
  }
  
  
  cartPatch(){
    this.api.patch('https://api.everrest.educata.dev/shop/cart/product',{
      id: this.id,
      quantity: 1
    }).subscribe((resp: any) => {
      console.log(resp)
    })
  }
  
  

}
