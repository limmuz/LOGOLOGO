import { Component, Input } from '@angular/core';
import { BlackRoundButtonComponent } from "../buttons/black-round-button/black-round-button.component";

@Component({
  selector: 'app-card-settings-layout',
  imports: [BlackRoundButtonComponent],
  templateUrl: './card-settings-layout.component.html',
  styleUrl: './card-settings-layout.component.css'
})
export class CardSettingsLayoutComponent {
  @Input() bandeira: string = ""
  @Input() altBandeira: string = ""
  @Input() nomeBandeira: string = ""
  @Input() numeroCartao: string = ""
  @Input() blackRoundButtonDelete: string = ""
  @Input() blackRoundButtonStandard: string = ""
}
