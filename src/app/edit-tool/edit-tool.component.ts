import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToolService} from '../tool.service';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {stringify} from 'querystring';


@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.css']
})
export class EditToolComponent implements OnInit {

  toolId: string;
  confirm = false;
  tool: any;
  newPhotos: any[] = [];

  editTool = this.formBuilder.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    price: [''],
    quantity: [''],
    description: ['', Validators.required]
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private toolService: ToolService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
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

  onDataSubmit() {
    this.toolService.editTool(this.toolId, this.editTool.value).subscribe(
      () => {
        this.router.navigate(['/admin']).then(nav => {
          console.log(`redirected ${nav}`);
        }, error => console.log(error));
      },
      error => console.log(error),
      () => console.log('Tool updated'));
  }

  onPhotoSubmit() {
    const formData = new FormData();
    this.newPhotos.forEach((photo) => {
      formData.append('photos', photo);
    });
    this.toolService.addPhotos(this.toolId, formData).subscribe(() => {
      this.toolService.getToolById(this.toolId).subscribe(newTool => {
          this.tool = newTool;
          this.newPhotos = null;
        }
      );
    }, error => console.log(error), () => console.log('Photo(s) uploaded'));
  }

  fileEvent(event?: Event) {
    const length = (event.target as HTMLInputElement).files.length;
    for (let i = 0; i < length; i++) {
      this.newPhotos[i] = (event.target as HTMLInputElement).files[i];
    }
  }

  resetForm() {
    this.editTool.reset();
  }

// Asking user to delete ONE image by ID
  openDialog(photoObj): void {
    const dialogRef = this.dialog.open(DeleteImageDialogComponent, {
      width: '300px',
      data: {confirm: this.confirm, photoObj}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.confirm + ' ' + stringify(result.photoObj));

      // Delete record if true
      if (result.confirm === true) {
        this.deleteImage(photoObj._id);
        console.log('Photo deleted');
      }
    });
  }

  deleteImage(photo) {
    this.toolService.deleteImage(photo).subscribe(() => {
      this.toolService.getToolById(this.toolId).subscribe(edited => this.tool = edited);
    });
    console.log(photo);
  }

}

// Delete ONE image
@Component({
  selector: 'app-delete-image-dialog',
  templateUrl: './delete-image-dialog-component.html',
  styleUrls: ['./dialog.css'],
})
export class DeleteImageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.data.confirm = false;
    this.dialogRef.close(this.data);
  }

  onYesClick(): void {
    this.data.confirm = true;
    this.dialogRef.close(this.data);
  }
}
