import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        const errJson = new Error(JSON.stringify(err));

        if ([401].indexOf(err.status) !== -1) {
          this.router.navigate(['/auth/login']);
        }

        if ([500].indexOf(err.status) !== -1) {
          this.router.navigate(['/pages/miscellaneous/500']);
        }

        if (err.error) {
          return throwError(err.error || err.statusText);
        }
        return throwError(err);
      })
    );
  }
}
