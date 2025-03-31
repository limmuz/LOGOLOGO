import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BlackSquareButtonComponent } from "../../components/buttons/black-square-button/black-square-button.component";

@Component({
  selector: 'app-error-page',
  imports: [RouterModule, HeaderComponent, FooterComponent, BlackSquareButtonComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}
