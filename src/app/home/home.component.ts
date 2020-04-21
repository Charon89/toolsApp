import { Component, OnInit } from '@angular/core';
import {Tool} from '../tool';
import {ToolService} from '../tool.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tools: Tool[];

  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.getAllTools();
  }

  getAllTools(): void{
    this.toolService.getAllTools().subscribe(tools => this.tools = tools);
  }

}
