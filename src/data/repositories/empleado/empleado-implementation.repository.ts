import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../../../domain/models/empleado.model';
import { EmpeladoRepository } from '../../../domain/repositories/empleado.repository';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoImplementationRepository implements EmpeladoRepository {
  private base_endpoint = '/api/v1';
  constructor(private http: HttpClient) {
    // super();
  }

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(
      `${environment.URL_API}${this.base_endpoint}/empleado`
    );
  }
  getById(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/empleado/${id}`
    );
  }
  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/empleado`,
      empleado
    );
  }
  update(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(
      `${environment.URL_API}${this.base_endpoint}/empleado/${empleado.id}`,
      empleado
    );
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.URL_API}${this.base_endpoint}/empleado/${id}`
    );
  }
}
