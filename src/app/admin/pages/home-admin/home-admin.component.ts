import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";

@Component({
  selector: 'app-home-admin',
  imports: [RouterModule, AdminLayoutComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
