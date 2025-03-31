import { Component } from '@angular/core';
import { BlackSquareButtonComponent } from "../buttons/black-square-button/black-square-button.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-under-constructions',
  imports: [BlackSquareButtonComponent, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './under-constructions.component.html',
  styleUrl: './under-constructions.component.css'
})
export class UnderConstructionsComponent {

}
