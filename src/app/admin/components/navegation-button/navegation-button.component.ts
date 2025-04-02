import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navegation-button',
  imports: [],
  templateUrl: './navegation-button.component.html',
  styleUrl: './navegation-button.component.css'
})
export class NavegationButtonComponent {
  @Input() iconBootStrap: string = ""
}
