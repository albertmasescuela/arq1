import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs/index';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 400) {
            console.log('400 error-Interceptor !', error.error);
            if (error.error.errors && error.error.errors.length > 0) {
              const err = error.error.errors[0];
              switch (err.codigoError) {
                case 100:
                case 130:
                case 403:
                  return throwError(error);
                default:
                  const lastM: string = this.lastMethod(error.url);
                  const lastUrl: string = this.lastUrl(error.url);
                  if (
                    lastUrl === 'recoverPreavis' ||
                    lastUrl === 'sendPreavis'
                  ) {
                    console.log('1');
                  }
                  if (lastUrl === 'llegoTarde') {
                    console.log('1');
                  }
                  return throwError(error);
              }
            }
          }
          if (error.status === 403) {
            console.log('403 error-Interceptor !', error.error);
          }
          if (error.status === 404) {
            console.log('404 error-Interceptor !', error.error);
            if (this.lastMethod(error.url) === 'xofers') {
            }
            if (this.lastMethod(error.url) === 'vehicles') {
            }
          }
          //FIXME:
          if (error.status === 0 || error.status === 500) {
            return throwError(error);
          }
        }
      })
    );
  }

  lastUrl(cad: string): string {
    return cad.substr(cad.lastIndexOf('/') + 1);
  }

  lastMethod(cad: string): string {
    const fi: number = cad.lastIndexOf('/');
    const inici: number = cad.substring(0, fi - 1).lastIndexOf('/');
    return cad.substring(inici + 1, fi);
  }
}
