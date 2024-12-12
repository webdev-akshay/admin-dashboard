import { CommonModule } from '@angular/common';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  categoryList:any=[]=[];
  constructor(private categoryService:CategoryService){}
  getCategories(){
    this.categoryService.getCategories().subscribe((data)=>{
      return this.categoryList=data;
    })
  }
  ngOnInit(): void {
    this.getCategories()
    console.log(this.categoryList)
  }

}
