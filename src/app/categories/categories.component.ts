import {Component, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];
  constructor(private toolService: ToolService, private router: Router, private titleService: Title) {
  }

  ngOnInit(): void {
    this.toolService.getCategory().subscribe(categories => this.categories = categories);
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle('GTA Tools - ' + newTitle);
  }

  reload(){
    this.router.navigateByUrl('/contacts', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    });
  }

}
