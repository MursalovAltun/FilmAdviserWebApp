import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../@core/backend/common/services/movie.service';
import { Movie } from '../../../@core/interfaces/movie-adviser/movie';
import { first } from 'rxjs/operators';
import { PageSpinnerService } from '../../../shared/services/page-spinner.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies: Array<Movie>;
  public loading: boolean;

  constructor(private movieService: MovieService,
              private spinner: PageSpinnerService) { }

  ngOnInit() {
    this.loading = true;
    this.spinner.toggleSpinnerVisibility();
    this.movieService.getTrending('week').pipe(first()).subscribe(movies => {
      this.movies = movies;
      console.log('Movies - ', this.movies);
      this.loading = false;
      this.spinner.toggleSpinnerVisibility();
    });
  }

}
