import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopImageComponent } from './laptop-image/laptop-image.component';
import { FlexibleFinancingOverviewComponent } from './flexible-financing-overview/flexible-financing-overview.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoginFormComponent,
    LoginCardComponent, 
    LaptopImageComponent, 
    MatIconModule,
    FlexibleFinancingOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
