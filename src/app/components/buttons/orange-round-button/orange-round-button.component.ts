import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orange-round-button',
  imports: [],
  templateUrl: './orange-round-button.component.html',
  styleUrl: './orange-round-button.component.css'
})
export class OrangeRoundButtonComponent {
  @Input() orangeRoundButton: string = ""
}
