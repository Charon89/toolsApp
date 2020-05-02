import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToolService} from '../tool.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Output() newLimit = new EventEmitter<number[]>();

  @Input() limit: number;
  @Input() skip: number;
  @Input() category: string;

  toolsAmount;

  page = 1;
  selectedPage: number;
  totalPages = [];

  statusClass = 'not-active';

  constructor(private toolService: ToolService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      if (params.category) {
        this.page = 1;
        this.selectedPage = this.page;
        this.totalPages = [];
        this.category = params.category;
        this.toolService.getToolsPage(this.category).subscribe(tools => {
          this.toolsAmount = tools.length;
          for (let i = 1; i <= Math.ceil(this.toolsAmount / this.limit); i++){
            this.totalPages.push(i);
          }
        });
      } else {
        this.page = 1;
        this.selectedPage = this.page;
        this.totalPages = [];
        this.toolService.getAllTools().subscribe(tools => {
          this.toolsAmount = tools.length;
          for (let i = 1; i <= Math.ceil(this.toolsAmount / this.limit); i++){
            this.totalPages.push(i);
          }
        });
      }

    }, error => console.log(error));
  }

  nextPage() {
    if (this.page < Math.ceil(this.toolsAmount / this.limit)) {
      ++this.page;
      this.selectedPage = this.page;
      this.newLimit.emit([this.limit, this.skip + this.limit]);
    }
  }

  prevPage() {
    if (this.page > 1) {
      --this.page;
      this.selectedPage = this.page;
      this.newLimit.emit([this.limit, this.skip - this.limit]);
    }
  }

  goToPage(page){
    this.selectedPage = page;
    this.page = page;
    this.newLimit.emit([this.limit, (page - 1) * (this.limit)]);
   // console.log(`Page: ${page} | Limit: ${this.limit} | skip:` + page * (this.limit));
  }

}
