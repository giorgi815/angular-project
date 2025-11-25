import { Component } from '@angular/core';
import { Api } from '../services/apiservices';
import { ActivatedRoute,} from '@angular/router';
import { Order } from '../models/cartproducts';
import { CommonModule } from '@angular/common';
import { Products } from '../models/product';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartProducts : Order = new Order
  cartPics : Products = new Products

  
  constructor(private api : Api, private activatedroute : ActivatedRoute){}



  ngOnInit(){
    this.addCartProducts()
  }
  
  addCartProducts(){
    this.api.getAll('https://api.everrest.educata.dev/shop/cart').subscribe((resp: any) => {
      console.log(resp)
      this.cartProducts = resp
      return this.apiMerge()
    })
  }

  // addCartProducts(){
  //   this.api.getAll('https://api.everrest.educata.dev/shop/cart')
  // .subscribe((cartResp: any) => {
  //   console.log(cartResp)
  //   this.cartProducts = cartResp;
  //   this.attachImagesToCart();
  // });

  // }

  // attachImagesToCart(){
  //   this.api.getAll(`https://api.everrest.educata.dev/shop/products/id/69206ebdf99102a586f1ead5`).subscribe((resp : any) =>{
  //     console.log(resp)
  //   })
  // }

  apiMerge(){
    this.api.getAll(`https://api.everrest.educata.dev/shop/cart`).pipe(
      switchMap(async (userData) => this.api.getAll(`https://api.everrest.educata.dev/shop/products/id/${this.cartPics.thumbnail}`).subscribe(orderData => {
        return orderData
      })
      )
    )
    
  }

  deleteId(_id: string){
    this.api.deleteObject("https://api.everrest.educata.dev/shop/cart/product",{
      id: _id
    }).subscribe({
      next: (resp) => {
        window.location.reload()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


}
