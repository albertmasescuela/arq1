import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from '../core/auth.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  public token: string = '';

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authHeader = this.injector.get(AuthService);
    if (req.url.split('.').reverse()[0] !== 'json') {
    }
    if (authHeader.token) {
      if (this.lastUrl(req.url) !== 'login') {
        const authReq = req.clone({
          headers: req.headers.set('X-Auth-Token', `${authHeader.token}`)
        });
        return next.handle(authReq);
      }
    }
    return next.handle(req);
  }

  lastUrl(cad: string): string {
    return cad.substr(cad.lastIndexOf('/') + 1);
  }
}
