import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ToolService} from '../tool.service';
import {Tool} from '../tool';
import {Router} from '@angular/router';


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
  columnsToDisplay = ['title', 'price', 'category', 'quantity', 'actionsColumn'];
  expandedElement: Tool | null;

  constructor(private toolService: ToolService, private route: Router) {
  }

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe(data => this.dataSource = data);
  }

  deleteTool(id) {
    this.toolService.deleteToolById(id).subscribe(() => this.toolService.getAllTools().subscribe(data => this.dataSource = data));
  }
}
