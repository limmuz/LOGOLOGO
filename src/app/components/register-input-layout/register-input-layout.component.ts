import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-input-layout',
  imports: [],
  templateUrl: './register-input-layout.component.html',
  styleUrl: './register-input-layout.component.css'
})
export class RegisterInputLayoutComponent {
  @Input() tema: string = ""
  @Input() label: string = ""
  @Input() email: string = ""
}

