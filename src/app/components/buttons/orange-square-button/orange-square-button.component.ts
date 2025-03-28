import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orange-square-button',
  imports: [],
  templateUrl: './orange-square-button.component.html',
  styleUrl: './orange-square-button.component.css'
})
export class OrangeSquareButtonComponent {
  @Input() tema: string = ""
  @Input() orangeSquareButton: string = ""
}
