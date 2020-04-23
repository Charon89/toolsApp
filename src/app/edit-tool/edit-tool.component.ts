import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private toolService: ToolService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.toolId = this.activatedRoute.snapshot.params.id;
    this.toolService.getToolById(this.toolId).subscribe((tool) => {
      this.tool = tool;
      this.editTool.patchValue({
        title: tool.title,
        category: tool.category,
        price: tool.price,
        quantity: tool.quantity,
        description: tool.description
      });
    });
  }

  onSubmit() {
    this.toolService.editTool(this.toolId, this.editTool.value).subscribe(
      () => {
        this.router.navigate(['/admin']).then(nav => {
          console.log(`redirected ${nav}`);
        }, error => console.log(error));
      },
      error => console.log(error),
      () => console.log('Tool updated'));
  }

  resetForm() {
    this.editTool.reset();
  }

}
