import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-interests-list',
  templateUrl: './interests-list.component.html',
  styleUrls: ['./interests-list.component.scss']
})
export class InterestsListComponent implements OnInit {
  interestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.interestForm = this.fb.group({
      interests: this.fb.array([]),
      newInterest: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.addInterest();
  }

  get interests(): FormArray {
    return this.interestForm.get('interests') as FormArray;
  }

  addInterest(): void {
    this.interests.push(this.fb.control(''));
  }

  removeInterest(index: number): void {
    this.interests.removeAt(index);
  }

  submitForm(): void {
    console.log(this.interestForm.value);
    // Place your form submission logic here
  }
}
