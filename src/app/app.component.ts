import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GTA Tools - best prices for new and used tools.';

  constructor(private titleService: Title) {
    this.titleService.setTitle('GTA Tools');
  }


}
