import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiAdmin = 'http://localhost:3000/admin';
  private apiClient = 'http://localhost:3000/clients';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      // Primeiro: busca nos admins
      this.http.get<any[]>(`${this.apiAdmin}?email=${email}&senha=${senha}`).subscribe(admins => {
        if (admins.length > 0) {
          localStorage.setItem('usuarioLogado', JSON.stringify({ ...admins[0], tipo: 'admin' }));
          resolve({ tipo: 'admin' });
        } else {
          // Senão, busca nos clients
          this.http.get<any[]>(`${this.apiClient}?email=${email}&senha=${senha}`).subscribe(clients => {
            if (clients.length > 0) {
              localStorage.setItem('usuarioLogado', JSON.stringify({ ...clients[0], tipo: 'client' }));
              resolve({ tipo: 'client' });
            } else {
              reject('Usuário não encontrado');
            }
          });
        }
      });
    });
  }

  getUsuarioLogado() {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

  isAdmin(): boolean {
    const user = this.getUsuarioLogado();
    return user && user.tipo === 'admin';
  }

  isClient(): boolean {
    const user = this.getUsuarioLogado();
    return user && user.tipo === 'client';
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }

  isLogado(): boolean {
    return !!localStorage.getItem('usuarioLogado');
  }
}
