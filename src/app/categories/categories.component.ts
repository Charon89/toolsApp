import { Component, OnInit } from '@angular/core';
import {ToolService} from '../tool.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: object;

  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.toolService.getCategory().subscribe(categories => this.categories = categories);
    console.log(this.categories);
  }
}
