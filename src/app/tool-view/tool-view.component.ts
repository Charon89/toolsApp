import {Component, OnInit} from '@angular/core';
import {ToolService} from '../tool.service';
import {ActivatedRoute} from '@angular/router';
import {Tool} from '../tool';

@Component({
  selector: 'app-tool-view',
  templateUrl: './tool-view.component.html',
  styleUrls: ['./tool-view.component.css']
})
export class ToolViewComponent implements OnInit {

  tool: any;
  views = 0;
  toolSub: any;
  index: number;

  constructor(private toolService: ToolService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.toolSub = this.toolService
        .getToolById(params._id)
        .subscribe(responseData => {
          this.tool = responseData;
          this.views++;
          this.index = 0;
        });
    });
  }

  nextImage() {
    this.index < (this.tool.photos.length - 1) ? this.index++ : this.index;
    console.log(this.index);
  }

  prevImage() {
    this.index > 0 ? this.index-- : this.index;
    console.log(this.index);
  }

}
