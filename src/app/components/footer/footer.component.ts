import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
