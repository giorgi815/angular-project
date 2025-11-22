import { Component } from '@angular/core';
import { Api } from '../services/apiservices';
import { ActivatedRoute,} from '@angular/router';
import { Order } from '../models/cartproducts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  id!: string
  cartProducts!: Order
  
  constructor(private api : Api, private activatedroute : ActivatedRoute){}



  ngOnInit(){
    this.addCartProducts()
  }
  
  addCartProducts(){
    this.api.getAll('https://api.everrest.educata.dev/shop/cart').subscribe((resp: any) => {
      console.log(resp)
      this.cartProducts = resp
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

}
