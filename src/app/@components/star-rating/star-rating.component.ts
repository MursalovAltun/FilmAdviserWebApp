import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input()
  public score: number;

  @Input()
  public maxScore = 5;

  @Output()
  public rateChanged = new EventEmitter();

  public forDisplay = false;
  range = [];
  marked = -1;

  public iconOptions = {};

  constructor(private _authService: NbAuthService) { }

  ngOnInit() {
    this._authService.isAuthenticated().subscribe(isAuthenticated => {
      this.forDisplay = !isAuthenticated;
      if (isAuthenticated) {
        this.iconOptions = {
          animation: { type: 'zoom' },
        };
      }
    });
    for (let i = 0; i < this.maxScore; i++) {
      this.range.push(i);
    }
  }

  public mark = (index: number) => {
    this.marked = this.marked === index ? index - 1 : index;
    this.score = this.marked + 1;
    this.rateChanged.next(this.score);
  }

  public isMarked = (index) => {
    if (!this.forDisplay && this.score < 1) {
      if (index <= this.marked) {
        return 'star';
      } else {
        return 'star-outline';
      }
    } else {

      if (this.score >= index + 1) {
        return 'star';
      } else {
        return 'star-outline';
      }
    }
  }

}
