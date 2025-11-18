import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Services } from '../apiservices/services';
import { Products } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { SearchProducts } from '../models/search';

@Component({
  selector: 'app-main',
  imports: [CommonModule, ɵInternalFormsSharedModule, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  productArr: Products[] =[]

  search: SearchProducts[] = []

  constructor(private api : Services, private router : Router){}

  pageIndex = 1

  ngOnInit(){
    this.loadProducts()
  }

  nextPage(){
    this.pageIndex ++
    this.loadProducts()
  }

  prevousPage(){
    this.pageIndex --
    this.loadProducts()
  }

  onNumbers(index: number){
    this.pageIndex = index  
    this.loadProducts()
  }

  loadProducts(){
     this.api.getAll(`https://api.everrest.educata.dev/shop/products/all?page_index=${this.pageIndex}&page_size=10`)
    .subscribe((resp: any) => {
      // console.log(resp)
      this.productArr= resp.products
    })    
  }


  onSubmit(){
     this.api.getAll(`https://api.everrest.educata.dev/shop/products/search`).subscribe((resp: any) => {
        console.log(this.productArr)
        this.productArr = resp.products

    })
  }

  keywords!: string;
  categoryId!: string;
  brand!: string;
  rating!: number;
  priceMin!: number;
  priceMax!: number;

  
  
  
  goToDetails(id: string){
    this.router.navigateByUrl(`/details/${id}`)
  }

  
  



}
