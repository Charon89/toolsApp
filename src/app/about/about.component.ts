import {Component, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  constructor() {
  }

  ngOnInit(): void {

  }

}
