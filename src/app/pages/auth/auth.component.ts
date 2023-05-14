import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../../../api/services/AuthService';
import { Login } from '../../../api/model/Login';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Register } from 'src/api/model/Register';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isRegisterForm = false;
  validateLoginForm!: FormGroup;
  validateRegisterForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: NzMessageService,) {
  }

  ngOnInit(): void {
    this.validateLoginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });

    this.validateRegisterForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      userName: [null, [Validators.required]],
    });
  }

  confirmationValidator = (control: FormGroup): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateRegisterForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  onHandleClickRegisterNow(): void {
    this.isRegisterForm = true;
  }

  onHandleClickBack(): void {
    this.isRegisterForm = false;
  }

  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }

    if (this.validateLoginForm.valid) {

      const login: Login = {
        email: this.validateLoginForm.value.email,
        password: this.validateLoginForm.value.password
      };

      this.isLoading = true;
      localStorage.removeItem('token');

      this.loginService.login(login).pipe(take(1)).subscribe(response => {
        if (response.succeeded) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));
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

  submitRegisterForm(): void {
    if (this.validateRegisterForm.valid) {

      const registerRequest: Register = {
        email: this.validateRegisterForm.value.email,
        password: this.validateRegisterForm.value.password,
        confirmPassword: this.validateRegisterForm.value.checkPassword,
        userName: this.validateRegisterForm.value.userName,
      };

      this.isLoading = true;

      this.loginService.register(registerRequest).pipe(take(1)).subscribe(response => {
        this.messageService.success(response.data);
        this.isLoading = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, error => {
        this.messageService.error(error.error.message);
        this.isLoading = false;
      });
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateRegisterForm.controls['checkPassword'].updateValueAndValidity());
  }
}
