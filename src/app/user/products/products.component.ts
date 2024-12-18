import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList:any=[]=[]
  selectedCategory:string='electronics'

  categories:string[]=['electronics','jewelery','mens clothing','womens clothing']
  constructor(private productService:ProductService){}

  getProducts(){
    this.productService.getAllProducts(this.selectedCategory).subscribe((data)=>{
      this.productList=data;
      console.log(this.productList)
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }

  // onCategoryChange(event:Event){
  //   const selectElement=event.target as HTMLSelectElement;
  //   const category=selectElement?.value;
  //   if(category){
  //     this.selectedCategory=category;
  //     this.getProducts()
  //   }
  //}
  // onCategoryChange(category: string) {
  //   this.selectedCategory = category;
  //   this.getProducts();
  // }


  onCategoryChange() {
    this.getProducts();
  }

  }



