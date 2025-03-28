import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-round-button',
  imports: [],
  templateUrl: './white-round-button.component.html',
  styleUrl: './white-round-button.component.css'
})
export class WhiteRoundButtonComponent {
  @Input() whiteRoundButtonText: string = ""
}
