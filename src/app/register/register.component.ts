import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';
import { RegisterData } from '../models/register.interface';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  RegisterForm = {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    country: '',
    password: '',
  };

  constructor(private api: ApiService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  Register(form: RegisterData) {
    if (
      this.RegisterForm.username !== "" ||
      this.RegisterForm.email !== "" ||
      this.RegisterForm.firstname !== "" ||
      this.RegisterForm.lastname !== "" ||
      this.RegisterForm.country !== "" ||
      this.RegisterForm.password !== ""
    ) {
      this.api.Register(form).subscribe((data) => {
        this.authService.setToken(data);
        this.router.navigate(["/home"])
      });
    } else {
      alert('ERROR:\nTodos los campos son requeridos.');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
