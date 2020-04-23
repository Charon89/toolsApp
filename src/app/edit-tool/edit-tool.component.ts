import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToolService} from '../tool.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.css']
})
export class EditToolComponent implements OnInit {

  toolId: string;
  tool: any;

  editTool = this.formBuilder.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    price: [''],
    quantity: [''],
    description: ['', Validators.required]
  });

  constructor(private activatedRoute: ActivatedRoute, private toolService: ToolService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.toolId = this.activatedRoute.snapshot.params.id;
    this.toolService.getToolById(this.toolId).subscribe(tool => this.tool = tool);
  }

  onSubmit(){
    console.log('submitted');
  }

  resetForm(){
    this.editTool.reset();
  }

}
