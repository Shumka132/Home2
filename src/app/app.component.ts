import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      'first_name': ['', [Validators.required, Validators.pattern(/^[\u0410-\u044F\u0401\u0451A-Za-z]+$/)]], // Русские и английские буквы
      'last_name': ['', [Validators.required, Validators.pattern(/^[\u0410-\u044F\u0401\u0451A-Za-z]+$/)]], // Русские и английские буквы
      'phone_number': ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
    }
  }
}
