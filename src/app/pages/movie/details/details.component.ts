import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../@core/interfaces/movie-adviser/movie';
import { MovieService } from '../../../@core/backend/common/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { PageSpinnerService } from '../../../shared/services/page-spinner.service';

@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public movie: Movie;
  public loading: boolean;

  constructor(private _movieService: MovieService,
              private _activatedRoute: ActivatedRoute,
              private spinner: PageSpinnerService) { }

  ngOnInit() {
    this.spinner.toggleSpinnerVisibility();
    this.loading = true;
    const movieId = parseInt(this._activatedRoute.snapshot.params['id'], 10);
    if (!isNaN(movieId)) {
      this._movieService.getDetailsById(movieId, 'videos').pipe(first()).subscribe(movieDetails => {
        this.movie = movieDetails;
        this.loading = false;
        this.spinner.toggleSpinnerVisibility();
      });
    }
  }

  public get totalVotes(): string {
    return `Total votes count - ${this.movie.voteCount}`;
  }

}
