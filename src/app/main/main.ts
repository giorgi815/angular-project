import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Services } from '../apiservices/services';
import { Products } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  constructor(private api : Services, private router : Router){}

  ngOnInit(){
    this.api.getAll("https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=10")
    .subscribe((resp: any) => {
      console.log(resp)
      this.productArr= resp.products  
      
    })
  }

  
  
  goToDetails(id: string){
    this.router.navigateByUrl(`/details/${id}`)

  }

  productArr: Products[] =[]
  



}
