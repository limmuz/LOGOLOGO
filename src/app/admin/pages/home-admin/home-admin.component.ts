import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from "../../components/admin-layout/admin-layout.component";
import { ButtonActionComponent } from "../../components/button-action/button-action.component";

@Component({
  selector: 'app-home-admin',
  imports: [RouterModule, AdminLayoutComponent, ButtonActionComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  @Input() nome: string = ""
  @Input() email: string = ""
}
