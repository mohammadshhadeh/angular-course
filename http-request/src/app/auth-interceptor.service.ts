import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') });
    console.log('Request is on its way');
    return next.handle(modifiedRequest).pipe(tap(event => {
      console.log(event)
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived, body data: ');
        console.log(event.body);
      }
    }));
  }
}
