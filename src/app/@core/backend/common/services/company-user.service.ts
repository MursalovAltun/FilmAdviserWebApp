import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyUser } from '../../../interfaces/movie-adviser/company-user';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

export class CompanyUserService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getByCompany(companyId: number): Observable<Array<CompanyUser>> {
    return this.http
      .get(`${this.apiUrl}/CompanyUser/ByCompany`, {
        params: new HttpParams().set('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(c => {
            return new CompanyUser(c);
          });
        })
      );
  }

  getCurrentCompanies(): Observable<Array<CompanyUser>> {
    return this.http
      .get(`${this.apiUrl}/CompanyUser/CurrentCompanies`)
      .pipe(
        map((x: any[]) => {
          return x.map(c => {
            return new CompanyUser(c);
          });
        })
      );
  }
}
