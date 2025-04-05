import { Component } from '@angular/core';
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { HomeAdminComponent } from "./pages/home-admin/home-admin.component";

@Component({
  selector: 'app-admin',
  imports: [AdminLayoutComponent, HomeAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
