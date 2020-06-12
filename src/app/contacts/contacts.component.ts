import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ToolService} from '../tool.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  emailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private toolService: ToolService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('GTA Tools - Contact');
  }

  onSubmit() {
    const mail = {
      email: this.emailForm.controls.email.value,
      name: this.emailForm.controls.name.value,
      text: this.emailForm.controls.message.value
    };

    this.toolService.contactSeller(mail).subscribe(null, error => console.log(error), () => console.log('E-mail sent'));
    this.emailForm.reset();
  }

  resetForm() {
    console.log('E-Mail form reset');
    this.emailForm.reset();
  }

}
