import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';
import { EmpeladoRepository } from './empleado.repository';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoImplementationRepository implements EmpeladoRepository {
  private base_endpoint = '/api/v1/';
  constructor(private http: HttpClient) {
    // super();
  }

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(
      `${environment.URL_API}${this.base_endpoint}/user`
    );
  }
  getById(id: number): Observable<Empleado> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/user`,
      { params }
    );
  }
  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/user`,
      empleado
    );
  }
  update(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/user`,
      empleado
    );
  }
  delete(id: number): Observable<void> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.delete<void>(
      `${environment.URL_API}${this.base_endpoint}/user`,
      { params }
    );
  }
}
