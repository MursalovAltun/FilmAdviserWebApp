import { RequestTable } from '../../../interfaces/movie-adviser/request-table';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RequestTableService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getListByProject(projectId: number): Observable<RequestTable[]> {
    return this.http
      .get(`${this.apiUrl}/requestTable/getByProject`, {
        params: new HttpParams().append('projectId', projectId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new RequestTable(y);
          });
        })
      );
  }

  getTemplates(companyId: number): Observable<RequestTable[]> {
    return this.http
      .get(`${this.apiUrl}/requestTable/Templates`, {
        params: new HttpParams().append('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new RequestTable(y);
          });
        })
      );
  }

  getById(requestTableId: number): Observable<RequestTable> {
    return this.http
      .get(`${this.apiUrl}/requestTable`, {
        params: new HttpParams().append(
          'requestTableId',
          requestTableId.toString()
        )
      })
      .pipe(
        map((x: any) => {
          return new RequestTable(x);
        })
      );
  }

  create(requestTable: any) {
    return this.http.post(`${this.apiUrl}/requestTable`, requestTable);
  }

  update(requestTable: any) {
    return this.http.put(`${this.apiUrl}/requestTable`, requestTable);
  }

  delete(requestTableId: number) {
    return this.http.delete(`${this.apiUrl}/requestTable`, {
      params: new HttpParams().append(
        'requestTableId',
        requestTableId.toString()
      )
    });
  }

  updateLastEdit(requestTableId: number) {
    return this.http.post(`${this.apiUrl}/requestTable/UpdateLastEdit`, null, {
      params: new HttpParams().append(
        'requestTableId',
        requestTableId.toString()
      )
    });
  }

  save(requestTableId: number, requestTable: RequestTable) {
    return this.http.post(`${this.apiUrl}/requestTable/Save`, requestTable, {
      params: new HttpParams().append(
        'requestTableId',
        requestTableId.toString()
      )
    });
  }
}
