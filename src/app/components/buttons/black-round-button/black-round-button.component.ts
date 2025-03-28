import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-round-button',
  imports: [],
  templateUrl: './black-round-button.component.html',
  styleUrl: './black-round-button.component.css'
})
export class BlackRoundButtonComponent {
  @Input() blackRoundButton: string = ""
}
