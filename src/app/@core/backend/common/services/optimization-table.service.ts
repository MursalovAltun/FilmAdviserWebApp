import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OptimizationTable } from '../../../interfaces/movie-adviser/optimization-table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class OptimizationTableService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  deleteByRequestTable(requestTableId: number) {
    return this.http.delete(
      `${this.apiUrl}/OptimizationTable/DeleteByRequestTable`,
      {
        params: new HttpParams().append(
          'requestTableId',
          requestTableId.toString()
        )
      }
    );
  }

  create(optimizationTable: OptimizationTable): Observable<OptimizationTable> {
    return this.http
      .post(`${this.apiUrl}/OptimizationTable/Create`, optimizationTable)
      .pipe(map(x => new OptimizationTable(x)));
  }

  getByRequestTable(requestTableId: number): Observable<OptimizationTable[]> {
    return this.http
      .get(`${this.apiUrl}/OptimizationTable`, {
        params: new HttpParams().append(
          'requestTableId',
          requestTableId.toString()
        )
      })
      .pipe(
        map((x: OptimizationTable[]) => x.map(y => new OptimizationTable(y)))
      );
  }

  getById(optimizationTableId: number): Observable<OptimizationTable> {
    return this.http
      .get(`${this.apiUrl}/OptimizationTable/ById`, {
        params: new HttpParams().append(
          'optimizationTableId',
          optimizationTableId.toString()
        )
      })
      .pipe(map(x => new OptimizationTable(x)));
  }

  getDocuments(optimizationTableId: number) {
    return this.http.get(`${this.apiUrl}/OptimizationTable/Documents`, {
      params: new HttpParams().append(
        'optimizationTableId',
        optimizationTableId.toString()
      )
    });
  }

  update(
    optimizationTableId: number,
    totalBaseline: number,
    totalPrice: number,
    data: any
  ) {
    return this.http.put(`${this.apiUrl}/OptimizationTable/Update`, data, {
      params: new HttpParams()
        .append('optimizationTableId', optimizationTableId.toString())
        .append('totalBaseline', totalBaseline.toString())
        .append('totalPrice', totalPrice.toString())
    });
  }
}
