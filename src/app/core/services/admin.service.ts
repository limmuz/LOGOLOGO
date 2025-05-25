import { Injectable } from '@angular/core';
import { Admin } from '../types/admin.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly API = 'http://localhost:3000/admin'

  constructor(private http: HttpClient) { }

  listar(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.API)

  }

  incluir(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.API, admin)
  }

  editar(admin: Admin): Observable<Admin> {
    const url = `${this.API}/${admin.id}`
    return this.http.put<Admin>(url, admin)
  }

  buscarPorId(id: number): Observable<Admin | undefined> {
    return this.http.get<Admin>(this.API + `/${id}`);
  }

  excluir(id: number): Observable<Admin> {
    return this.http.delete<Admin>(this.API + `/${id}`);
  }
}

