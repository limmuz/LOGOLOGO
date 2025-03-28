import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ListProductsComponent } from "../../components/list-products/list-products.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductBoxComponent } from "../../components/product-box/product-box.component";
import { WhiteRoundButtonComponent } from "../../components/buttons/white-round-button/white-round-button.component";
import { BlackSquareButtonComponent } from "../../components/buttons/black-square-button/black-square-button.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ListProductsComponent, FooterComponent, ProductBoxComponent, WhiteRoundButtonComponent, BlackSquareButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
