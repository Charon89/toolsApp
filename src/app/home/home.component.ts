import {Component, OnInit} from '@angular/core';
import {Tool} from '../tool';
import {ToolService} from '../tool.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  limit = 3;
  skip = 0;
  category: string;
  tools: any;


  constructor(private toolService: ToolService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.category = params.category;
        this.toolService.getToolsPage(this.category, this.limit).subscribe(tools => this.tools = tools);

      } else if (params.limit || params.skip) {
        this.category = null;
        this.toolService.getToolsPage(this.category, params.limit, params.skip).subscribe(tools => this.tools = tools);
      } else {
        this.category = null;
        this.toolService.getToolsPage(this.category, this.limit, 0).subscribe(tools => this.tools = tools);
      }
    });
  }

  receiveLimit($event) {
    this.getPage($event);
  }

  getPage(num) {
    return this.toolService.getToolsPage(this.category, num[0], num[1],).subscribe(data => {
      if (data.length > 0) {
        this.limit = num[0];
        this.skip = num[1];
        this.tools = data;
      }
    });
  }
}
