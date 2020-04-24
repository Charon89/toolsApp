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

  limit = 5;
  skip = 0;
  category: string;
  tools: any;


  constructor(private toolService: ToolService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.category = params.category;
        console.log('Init with category: ' + this.category);
        this.toolService.getToolsPage(this.limit, 0, this.category).subscribe(tools => this.tools = tools);

      } else {
        this.category = null;
        this.toolService.getToolsPage(this.limit, 0, this.category).subscribe(tools => this.tools = tools);
        console.log('Init without category');
      }
    });
  }

  receiveLimit($event) {
    this.getPage($event);
  }

  getPage(num) {
    return this.toolService.getToolsPage(num[0], num[1], this.category).subscribe(data => {
      if (data.length > 0) {
        this.limit = num[0];
        this.skip = num[1];
        this.tools = data;
      }
    });
  }
}
