import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SingleProduct } from '../models/productid';
import { Api } from '../services/apiservices';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  Pluse = 1

pluse(){
  this.Pluse ++
}




minus(){
  this.Pluse --
}

  id! : string
  productId!: SingleProduct
  container = false

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



addTocart(){
  this.api.getAll(`https://api.everrest.educata.dev/shop/cart`).subscribe({
    next: (resp : any)=> {
      this.api.patch(`https://api.everrest.educata.dev/shop/cart/product`,{
        id: this.id,
        quantity: this.Pluse
      }).subscribe((resp : any) =>{
        console.log(resp)
      })
    },
    error: (error)=>{
      if(error){
        this.api.postObject(`https://api.everrest.educata.dev/shop/cart/product`,{
          id: this.id,
          quantity: this.Pluse
        }).subscribe((resp : any) => {
          console.log(resp)
        })
      }
    }
  })
}



}