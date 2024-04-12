import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginData } from '../models/login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: "",
    password: ""
  }

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  Login(form: LoginData) {
    this.api.Login(form).subscribe(data =>  {
      console.log(data);
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}