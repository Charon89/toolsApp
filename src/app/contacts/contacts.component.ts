import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  emailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: [''],
    postalCode: [''],
    city: [''],
    province: [''],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('E-Mail sent');
    console.log(this.emailForm.value);
    this.emailForm.reset();
  }

  resetForm(){
    console.log('E-Mail form reset');
    this.emailForm.reset();
  }

}
