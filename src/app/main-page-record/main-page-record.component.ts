import { Component, OnInit, Input } from '@angular/core';
import {Tool} from '../tool';

@Component({
  selector: 'app-main-page-record',
  templateUrl: './main-page-record.component.html',
  styleUrls: ['./main-page-record.component.css']
})
export class MainPageRecordComponent implements OnInit {

  @Input() tool: Tool;
  constructor() { }

  ngOnInit(): void {
  }

}
