import { Component, OnInit } from '@angular/core';
import {Tool} from '../tool';
import {ToolService} from '../tool.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  limit = 5;
  skip = 0;

  tools: any;


  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.toolService.getToolsPage(this.limit, 0).subscribe(tools => this.tools = tools);
  }

  receiveLimit(num){
    this.limit = num[0];
    this.skip = num[1];
    this.toolService.getToolsPage(this.limit, this.skip).subscribe(tools => this.tools = tools);
  }
}
