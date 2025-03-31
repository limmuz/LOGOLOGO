import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { UnderConstructionsComponent } from "../../components/under-constructions/under-constructions.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, FooterComponent, UnderConstructionsComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
