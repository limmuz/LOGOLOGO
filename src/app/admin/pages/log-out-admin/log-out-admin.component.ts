import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-out-admin',
  standalone: true,  
  imports: [AdminLayoutComponent, RouterModule],
  templateUrl: './log-out-admin.component.html',
  styleUrl: './log-out-admin.component.css'
})
export class LogOutAdminComponent {

  constructor(private router: Router) {}

  logout() {
    
    console.log('Executando logout...');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
