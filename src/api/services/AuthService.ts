import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/Login';
import { LoginResponse } from '../model/LoginResponse';
import { BaseResponse } from '../model/BaseResponse';
import { Register } from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  public prefixUrl: string = "account";

  constructor(
    http: HttpClient,
    private router: Router) {
    super(http);
  }

  login(login: Login): Observable<BaseResponse<LoginResponse>> {
    return this.post('login', login);
  }

  register(request: Register): Observable<BaseResponse<any>> {
    return this.post('register', request);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
