import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ResponseTable } from '../../../interfaces/movie-adviser/response-table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseTableService {

  constructor(private http: HttpClient) { }

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get(id: number): Observable<ResponseTable> {
    return this.http
      .get(`${this.apiUrl}/ResponseTable`, {
        params: new HttpParams().append('id', id.toString())
      })
      .pipe(
        map(x => {
          return new ResponseTable(x);
        })
      );
  }

  update(data: ResponseTable) {
    return this.http.put(`${this.apiUrl}/ResponseTable`, data);
  }
}
