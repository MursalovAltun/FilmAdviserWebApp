import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Column } from '../../../interfaces/movie-adviser/column';
import { map } from 'rxjs/operators';

@Injectable()
export class ColumnService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getDetailsById(columnId: number): Observable<Column> {
    return this.http
      .get(`${this.apiUrl}/column/GetById`, {
        params: new HttpParams().set('id', columnId.toString())
      })
      .pipe(
        map((x: any) => {
          return new Column(x);
        })
      );
  }

  getList(): Observable<Column[]> {
    return this.http
      .get(`${this.apiUrl}/column`)
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new Column(y);
          });
        })
      );
  }

  getCustoms(companyId: number): Observable<Array<Column>> {
    return this.http
      .get(`${this.apiUrl}/column/GetCustoms`, {
        params: new HttpParams().set('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(c => {
            return new Column(c);
          });
        })
      );
  }

  getByCompany(companyId: number): Observable<Array<Column>> {
    return this.http
      .get(`${this.apiUrl}/column/GetByCompany`, {
        params: new HttpParams().set('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(c => {
            return new Column(c);
          });
        })
      );
  }

  createOrUpdate(column: Column) {
    return this.http
      .post(`${this.apiUrl}/column`, column);
  }

  delete(columnId: number) {
    return this.http
      .delete(`${this.apiUrl}/column`, {
        params: new HttpParams().set('id', columnId.toString())
      });
  }
}
