import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected url = environment.apiUrl + '/api';
  protected abstract prefixUrl: string;

  constructor(protected http: HttpClient) {
  }

  httpHeaders = {
    json: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  protected get<T>(uri?: string, parameters?: any): Observable<T> {
    const params = this.getUrlParams(parameters);
    return this.http.get<T>(`${this.url}/${this.prefixUrl}/${uri ?? ""}`, { params: params, headers: this.httpHeaders.json });
  }

  protected post(uri: string, body: any, options?: any): Observable<any> {
    return this.http.post(`${this.url}/${this.prefixUrl}/${uri}`, body, options);
  }

  protected delete(uri: string, body: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.prefixUrl}/${uri}`, body);
  }

  protected put(uri: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/${this.prefixUrl}/${uri}`, body);
  }

  protected getUrlParams(body: any): HttpParams {
    let params = new HttpParams();
    for (const key in body) {
      if (!body.hasOwnProperty(key)) continue;
      if (body[key] !== undefined) params = params.append(key, body[key]);
    }
    return params;
  }
}
