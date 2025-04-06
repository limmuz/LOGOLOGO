import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-home-admin',
  imports: [RouterModule, TableComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  @Input() nome: string = ""
  @Input() email: string = ""
}
