import {Component, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tool-view',
  templateUrl: './tool-view.component.html',
  styleUrls: ['./tool-view.component.css'],
  animations: [
    trigger('expandContact', [
      state('openContactContainer', style({height: '*'})),
      state('closeContactContainer', style({height: '0px', minHeight: '0'})),
      // state('collapsed', style({opacity: 0, transform: 'translateY(-400px)'})),
      // state('expanded', style({opacity: 1, transform: 'translateY(0)'})),
      // transition('expanded <=> collapsed', animate('400ms cubic-bezier(1, 1, 1, 1)')),
      transition('openContactContainer <=> closeContactContainer', animate('300ms cubic-bezier(1, 1, 1, 1)'))]),]
})
export class ToolViewComponent implements OnInit {

  tool: any;
  views = 0;
  index: number;
  isOpen = false;

  public emailForm: FormGroup;

  constructor(private toolService: ToolService, private route: ActivatedRoute, private fb: FormBuilder) {
  }


  ngOnInit(): void {

    this.emailForm = this.fb.group({
      title: [''],
      price: [''],

      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.toolService
        .getToolById(params._id)
        .subscribe(responseData => {
          this.tool = responseData;
          this.tool.views++;
          this.index = 0;
          this.emailForm.patchValue({
            title: this.tool.title,
            price: this.tool.price
          });
        });
    });
    this.toolService.editTool(this.tool?._id, this.tool);
  }

  toggleContact() {
    this.isOpen = !this.isOpen;
  }

  sendMail() {
    console.log(this.emailForm.value);
  }

  nextImage() {
    this.index < (this.tool.photos.length - 1) ? (this.index++) : this.index;
    console.log(this.index);
  }


  prevImage() {
    this.index > 0 ? (this.index--) : this.index;
    console.log(this.index);
  }
}
