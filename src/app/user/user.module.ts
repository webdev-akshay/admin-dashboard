import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';

const userRoutes:Routes=[
  {path:'', component:HomeComponent,
    children:[
      {path:'product', component:ProductsComponent},
      {path:'profile', component:ProfileComponent},
    ]
  },
]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)

  ],
  exports:[RouterModule]
})
export class UserModule { }
