import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../@core/interfaces/movie-adviser/movie';

@Component({
  selector: 'ngx-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  public movie: Movie;

  constructor() { }

  ngOnInit() {
    if (!this.movie) {
      throw new Error('Movie cannot be null');
    }
  }

}
