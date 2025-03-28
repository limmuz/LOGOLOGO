import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-square-button',
  imports: [],
  templateUrl: './black-square-button.component.html',
  styleUrl: './black-square-button.component.css'
})
export class BlackSquareButtonComponent {
  @Input() blackSquareButton: string = ""
}
