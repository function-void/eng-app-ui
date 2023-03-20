import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private router: Router,
    private message: NzMessageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const key = localStorage.getItem('token');
    if (key != null) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${key}`
        }
      });
    } else {
      this.redirectLoginPage();
    }

    return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      console.error(err);
      if (err.status === 401) {
        localStorage.removeItem('token');
        this.message.error(err.Message);
        this.redirectLoginPage();
      }
    }));
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
