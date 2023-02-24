import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading: Subject<boolean> = new Subject();

  constructor() {
    this.loading.next(false);
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  show() {
    return this.loading.next(true);
  }
  hide() {
    return this.loading.next(false);
  }
}
