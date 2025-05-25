import { Component } from '@angular/core';
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { HomeAdminComponent } from "./pages/home-admin/home-admin.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [AdminLayoutComponent, HomeAdminComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
