import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ToolService} from '../tool.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.component.html',
  styleUrls: ['./new-tool.component.css']
})
export class NewToolComponent implements OnInit {

  fileNames: string[] = [];
  photosArray = [];

  newToolForm = this.fb.group({
    title: ['', Validators.required],
    photos: [null],
    description: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private toolService: ToolService, private route: Router, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('GTA Tools - ADMIN - add new tool');
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.newToolForm.get('title').value);

    this.photosArray.forEach((photo) => {
      formData.append('photos', photo);
      console.log(this.newToolForm.get('photos').value);
    });
    formData.append('description', this.newToolForm.get('description').value);
    formData.append('category', this.newToolForm.get('category').value);
    formData.append('price', this.newToolForm.get('price').value);
    formData.append('quantity', this.newToolForm.get('quantity').value);


    this.toolService.newTool(formData).subscribe(
      () => this.route.navigate(['home']),
      error1 => console.log(error1),
      () => console.log('New tool created successfully'));
  }

  resetForm() {
    this.newToolForm.reset();
  }

  fileEvent(event?: Event) {

    const amount = (event.target as HTMLInputElement).files.length;
    for (let i = 0; i < amount; i++) {
      this.fileNames.push((event.target as HTMLInputElement).files[i].name);
      this.photosArray[i] = (event.target as HTMLInputElement).files[i];

      this.newToolForm.get('photos').updateValueAndValidity();
      console.log(this.photosArray[i]);
    }
  }

}
