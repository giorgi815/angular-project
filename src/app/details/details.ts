import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Services } from '../apiservices/services';
import { SingleProduct } from '../models/productid';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {

  id! : string

  constructor( private api: Services ,private activatedroute : ActivatedRoute) {
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

  
  showMore(){
    
  }

  productId: SingleProduct= new SingleProduct
  

}
