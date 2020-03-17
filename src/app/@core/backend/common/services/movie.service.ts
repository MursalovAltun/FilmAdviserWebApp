import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Movie } from '../../../interfaces/movie-adviser/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  /*
  / Gets trending movies list
  / timeWindow could only be day or week
  */
  getTrending(timeWindow: string): Observable<Array<Movie>> {
    return this.http
      .get(`${this.apiUrl}/Movie/Trending`, {
        params: new HttpParams().set('timeWindow', timeWindow)
      })
      .pipe(
        map((x: any) => {
          return x.map(m => {
            return new Movie(m);
          });
        }));
  }

  /*
  / Gets detailed info about movie by id
  */
  getDetailsById(id: number): Observable<Movie> {
    return this.http
      .get(`${this.apiUrl}/Movie/${id}`)
      .pipe(
        map((x: any) => {
          return new Movie(x);
        }));
  }

}
