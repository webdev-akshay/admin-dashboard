import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList:any=[]=[]

  constructor(private productService:ProductService){}

  getProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.productList=data;
      console.log(this.productList)
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }

}
