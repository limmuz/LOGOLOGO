import { Component, Input } from '@angular/core';
import { BlackRoundButtonComponent } from "../buttons/black-round-button/black-round-button.component";

@Component({
  selector: 'app-address-settings-layout',
  imports: [BlackRoundButtonComponent],
  templateUrl: './address-settings-layout.component.html',
  styleUrl: './address-settings-layout.component.css'
})
export class AddressSettingsLayoutComponent {
  @Input() logradouro: string = ""
  @Input() numero: string = ""
  @Input() bairro: string = ""
  @Input() uf: string = ""
  @Input() cep: string = ""

  @Input() blackRoundButtonEdit: string = ""
}
