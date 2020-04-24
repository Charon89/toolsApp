import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToolService} from '../tool.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Output() newLimit = new EventEmitter<number[]>();
  //@Output() newSkip = new EventEmitter<number>();

  @Input() limit: number;
  @Input() skip: number;

  toolsAmount;

  page = 1;

  constructor(private toolServise: ToolService) {
  }

  ngOnInit(): void {
    this.toolServise.getAllTools().subscribe(tools => this.toolsAmount = tools.length);
  }

  nextpage() {
    if (this.page < Math.ceil(this.toolsAmount / this.limit)) {
      ++this.page;
      this.newLimit.emit([this.limit, this.skip + this.limit]);
    }
    console.log(this.page + ' | ' + Math.ceil(this.toolsAmount / this.limit));
  }

  prevPage() {
    if (this.page > 1) {
      --this.page;
      this.newLimit.emit([this.limit, this.skip - this.limit]);
    }
  }

}
