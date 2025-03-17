import { ApplicationConfig, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

Injectable({
  providedIn: 'root'
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};

export class ClienteService {
  private apiUrl = 'sua-api-url/clientes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

  update(cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
