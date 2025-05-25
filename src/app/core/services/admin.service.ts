import { Injectable } from '@angular/core';
import { admin } from '../types/admin.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly API = 'http://localhost:3000/admin'

  constructor(private http: HttpClient) { }

  listar(): Observable<admin[]> {
    return this.http.get<admin[]>(this.API)

  }

  incluir(admin: admin): Observable<admin> {
    return this.http.post<admin>(this.API, admin)
  }

  editar(admin: admin): Observable<admin> {
    const url = `${this.API}/${admin.id}`
    return this.http.put<admin>(url, admin)
  }

  buscarPorId(id: number): Observable<admin | undefined> {
    return this.http.get<admin>(this.API + `/${id}`);
  }

  excluir(id: number): Observable<admin> {
    return this.http.delete<admin>(this.API + `/${id}`);
  }


}

