import { Component } from '@angular/core';
import { NavegationButtonComponent } from "../navegation-button/navegation-button.component";
import { LogoComponent } from "../../../components/logo/logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegation',
  imports: [RouterModule, NavegationButtonComponent, LogoComponent],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css'
})
export class NavegationComponent {

}
