import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [LoginFormComponent, MatCardModule, MatIconModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {

}
