import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private counter = 0;
  constructor(private loading: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.counter) {
      this.loading.show();
    }
    this.counter++;
    return next.handle(request).pipe(
      finalize(() => {
        this.counter--;
        if (!this.counter) {
          this.loading.hide();
        }
      })
    );
  }
}
