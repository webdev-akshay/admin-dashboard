import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRouter:Routes=[
 {path:'login', component:LoginComponent},
 {path:'register', component:RegisterComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouter)
  ]
})
export class AuthModule { }
