import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-empleados';
  loading$: Observable<boolean>;

  constructor(private loading: LoadingService) {
    this.loading$ = loading.getLoading();
  }
}
