import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/Login';
import { LoginResponse } from '../model/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  public prefixUrl: string = "account";

  constructor(http: HttpClient) {
    super(http);
  }

  login(login: Login): Observable<LoginResponse> {
    return this.post('login', login);
  }
}
