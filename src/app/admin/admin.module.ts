import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes:Routes=[
  {path:'dashboard', component:DashboardComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
