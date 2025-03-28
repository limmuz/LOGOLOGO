import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-input-layout',
  imports: [],
  templateUrl: './password-input-layout.component.html',
  styleUrl: './password-input-layout.component.css'
})
export class PasswordInputLayoutComponent {
  @Input() tema: string = ""
  @Input() label: string = ""
  @Input() password: string = ""
}
