import { Project } from '../../../interfaces/movie-adviser/project';
import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectInvite } from '../../../interfaces/movie-adviser/project-invite';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  create(data: Project): Observable<any> {
    return this.http.post(`${this.apiUrl}/project`, data);
  }

  get(id: number): Observable<Project> {
    return this.http
      .get(`${this.apiUrl}/project`, {
        params: new HttpParams().append('projectId', id.toString())
      })
      .pipe(
        map(x => {
          return new Project(x);
        })
      );
  }

  delete(id: number) {
    return this.http
    .delete(`${this.apiUrl}/project`, {
      params: new HttpParams().append('projectId', id.toString())
    });
  }

  getList(companyId: number): Observable<Project[]> {
    return this.http
      .get(`${this.apiUrl}/project/GetByCompany`, {
        params: new HttpParams().append('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new Project(y);
          });
        })
      );
  }

  getListForwarderClient(forwarderId: number, companyId: number) {
    return this.http
      .get(`${this.apiUrl}/project/GetByForwarderClient`, {
        params: new HttpParams()
          .append('forwarderId', forwarderId.toString())
          .append('companyId', companyId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new ProjectInvite(y);
          });
        })
      );
  }

  sendRequests(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/project/SendRequests`, data);
  }
}
