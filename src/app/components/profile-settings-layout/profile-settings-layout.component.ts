import { Component, Input } from '@angular/core';
import { BlackRoundButtonComponent } from "../buttons/black-round-button/black-round-button.component";

@Component({
  selector: 'app-profile-settings-layout',
  imports: [BlackRoundButtonComponent],
  templateUrl: './profile-settings-layout.component.html',
  styleUrl: './profile-settings-layout.component.css'
})
export class ProfileSettingsLayoutComponent {
  @Input() profileSettingLabel: string = ""
  @Input() profileSettingInput: string = ""
  @Input() blackRoundButtonEdit: string = ""
}
