import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../api/services/AuthService';
import { Login } from '../../../api/model/Login';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private router: Router,
    private messageService: NzMessageService,) {
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

      this.loginService.login(login).pipe(take(1)).subscribe(response => {
        if (response.succeeded) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['']);
        } else {
          this.isLoading = false;
          this.messageService.error(response.message);
        }
      }, error => {
        this.messageService.error(error.error.message);
        this.isLoading = false;
      });
    }
  }
}
