import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../api/services/AuthService';
import { Login } from '../../../api/model/Login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  validateForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(private fb: FormBuilder,
    private loginService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const login: Login = {
        email: this.validateForm.value.email,
        password: this.validateForm.value.password
      };
      this.isLoading = true;
      localStorage.removeItem('token');
      this.loginService.login(login).subscribe(data => {
        if (data) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['']);
        } else {
          this.isLoading = false;
        }
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
    }
  }
}
