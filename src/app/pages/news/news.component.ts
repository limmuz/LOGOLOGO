import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductBoxComponent } from "../../components/product-box/product-box.component";

@Component({
  selector: 'app-news',
  imports: [RouterModule, HeaderComponent, FooterComponent, ProductBoxComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
