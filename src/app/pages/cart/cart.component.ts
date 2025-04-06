import { Component } from '@angular/core';
import { UnderConstructionsComponent } from "../../components/under-constructions/under-constructions.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [UnderConstructionsComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
