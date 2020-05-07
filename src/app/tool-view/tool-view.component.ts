import {Component, Inject, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tool-view',
  templateUrl: './tool-view.component.html',
  styleUrls: ['./tool-view.component.css'],
  animations: [
    trigger('expandContact', [
      state('openContactContainer', style({height: '*'})),
      state('closeContactContainer', style({height: '0px', minHeight: '0'})),
      transition('openContactContainer <=> closeContactContainer', animate('300ms cubic-bezier(1, 1, 1, 1)'))]),]
})
export class ToolViewComponent implements OnInit {

  tool: any;
  index: number;
  isOpen = false;
  emailForm: FormGroup;

  constructor(private toolService: ToolService, private route: ActivatedRoute, private fb: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.emailForm = this.fb.group({
      toolid: [''],
      email: ['', Validators.required],
      name: ['', Validators.required],
      text: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.toolService
        .getToolById(params._id)
        .subscribe(responseData => {
          this.tool = responseData;
          this.tool.views++;
          this.index = 0;
          this.emailForm.patchValue({
            toolid: this.tool._id
          });
        });
    });
    this.toolService.editTool(this.tool?._id, this.tool);
  }

  // Contact seller form opener
  toggleContact() {
    this.isOpen = !this.isOpen;
  }

  // Get index of photo to enlarge
  enlargePhoto(index) {
    this.index = index;
  }

  // Send e-mail to the customer
  sendMail() {
    const data = {
      toolid: this.tool._id,
      email: this.emailForm.controls.email.value,
      name: this.emailForm.controls.name.value,
      text: this.emailForm.controls.text.value
    };
    this.toolService.contactSeller({} = data).subscribe(
      {
        error: error => console.log(error),
        complete: () => console.log('Mail sent')
      });

    this.emailForm.reset();
  }

  // Go to next photo
  nextImage() {
    this.index < (this.tool.photos.length - 1) ? (this.index++) : this.index;
  }

  // Go to previous photo
  prevImage() {
    this.index > 0 ? (this.index--) : this.index;
  }


}
