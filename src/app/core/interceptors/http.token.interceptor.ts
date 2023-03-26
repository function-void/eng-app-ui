import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private messageService: NzMessageService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const key = localStorage.getItem('token');
    if (key == null) {
      this.redirectLoginPage();
    }
    var cloneRequest = this.addToken(request, key);

    return next.handle(cloneRequest).pipe(tap((event: HttpEvent<any>) => {
    }, (error) => {
      if (error.status === 401) {
        setTimeout(() => {
          localStorage.removeItem('token');
          this.messageService.error(error.error.Message);
          this.redirectLoginPage();
        }, 1000);
      }
    }));
  }

  addToken(request: HttpRequest<any>, token: any) {
    let clone: HttpRequest<any>;
    clone = request.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return clone;
  }

  redirectLoginPage() {
    this.router.navigate(['/auth']);
  }
}

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ]
})
export class HttpTokenInterceptorModule {
}
