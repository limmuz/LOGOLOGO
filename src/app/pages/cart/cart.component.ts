import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, FooterComponent, LogoComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
