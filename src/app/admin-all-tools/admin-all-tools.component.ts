import {Component, OnInit, Inject} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ToolService} from '../tool.service';
import {Tool} from '../tool';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-all-tools',
  templateUrl: './admin-all-tools.component.html',
  styleUrls: ['./admin-all-tools.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),]),]
})

export class AdminAllToolsComponent implements OnInit {

  dataSource: Tool[];
  columnsToDisplay = ['title', 'price', 'quantity', 'actionsColumn'];
  expandedElement: Tool | null;

  confirm = false;
  confirmDeleteAll = false;

  constructor(private toolService: ToolService, public dialog: MatDialog, private titleService: Title) {
  }

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe(
      data => this.dataSource = data);
    this.titleService.setTitle('GTA Tools - ADMIN');
  }

// Asking user to delete ONE by ID
  openDialog(title, id): void {
    const dialogRef = this.dialog.open(AdminDeleteDialogComponent, {
      width: '300px',
      data: {confirm: this.confirm, toolId: id, objTitle: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.toolId);

      // Delete record if true
      if (result.confirm === true) {
        this.toolService.deleteToolById(id).subscribe(() => this.toolService.getAllTools().subscribe(
          data => this.dataSource = data));
        console.log('Record deleted');
      }
    });
  }

  // Asking user to delete ALL
  openDeleteAllDialog(): void {
    const dialogRef = this.dialog.open(AdminDeleteAllDialogComponent, {
      width: '300px',
      data: {confirmDeleteAll: this.confirmDeleteAll}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.confirmDeleteAll);

      // Delete if ConfirmDeleteAll
      if (result.confirmDeleteAll === true) {
        this.toolService.deleteAll().subscribe(() => this.toolService.getAllTools().subscribe(data => this.dataSource = data));
        console.log('All records deleted');
      }
    });
  }
}

// Delete ONE record
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './deleteDialog.html',
  styleUrls: ['./dialogs.css'],
})
export class AdminDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDeleteDialogComponent>,
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

// Delete ALL records
@Component({
  selector: 'app-delete-all-dialog',
  templateUrl: './admin-delete-all-dialog.html',
  styleUrls: ['./dialogs.css'],
})
export class AdminDeleteAllDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDeleteAllDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.data.confirmDeleteAll = false;
    this.dialogRef.close(this.data);
  }

  onYesClick(): void {
    this.data.confirmDeleteAll = true;
    this.dialogRef.close(this.data);
  }
}


