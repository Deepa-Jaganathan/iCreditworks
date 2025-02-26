import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, 
    FormsModule,ReactiveFormsModule, MatCheckboxModule,  MatInputModule, 
    MatButtonModule,
    MatIconModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  isFormSubmitted: boolean = false;

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
            this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            rememberMe:[false]
        });
  }

  onSubmit() {
    this.isFormSubmitted = !this.isFormSubmitted;
    console.log('Form Submitted');
    console.log(this.loginForm.value)
  }

}
