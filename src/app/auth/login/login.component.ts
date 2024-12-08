import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
    username:string=''
    password:string=''
  constructor(private router:Router){ }
  login(): void {
    debugger
    if (this.username === 'user' && this.password === 'user123') {
      alert('Login successful');
      this.router.navigate(['/user']);
    }else{
      alert("Login Failed")
    }
  }

  ngOnInit(): void {

  }

}
