import {Component, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];
  constructor(private toolService: ToolService, private router: Router) {
  }

  ngOnInit(): void {
    this.toolService.getCategory().subscribe(categories => this.categories = categories);
  }

  reload(){
    this.router.navigateByUrl('/contacts', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    });
  }

}
