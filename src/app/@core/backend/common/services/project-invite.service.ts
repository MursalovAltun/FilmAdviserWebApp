import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ProjectInvite } from '../../../interfaces/movie-adviser/project-invite';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectInviteService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getByForwarder(forwarderId: number): Observable<ProjectInvite[]> {
    return this.http
      .get(`${this.apiUrl}/ProjectInvite/GetByForwarder`, {
        params: new HttpParams().append('forwarderId', forwarderId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new ProjectInvite(y);
          });
        })
      );
  }

  getByProject(projectId: number): Observable<ProjectInvite[]> {
    return this.http
      .get(`${this.apiUrl}/ProjectInvite/GetByProject`, {
        params: new HttpParams().append('projectId', projectId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new ProjectInvite(y);
          });
        })
      );
  }

  getById(projectInviteId: number): Observable<ProjectInvite> {
    return this.http
      .get(`${this.apiUrl}/ProjectInvite`, {
        params: new HttpParams().append(
          'projectInviteId',
          projectInviteId.toString()
        )
      })
      .pipe(
        map((x: any) => {
          return new ProjectInvite(x);
        })
      );
  }

  send(projectInviteId: number, message: string) {
    return this.http.post(`${this.apiUrl}/ProjectInvite/SendResponse`, null, {
      params: new HttpParams()
        .append('projectInviteId', projectInviteId.toString())
        .append('message', message)
    });
  }

  decline(projectInviteId: number, message: string) {
    return this.http.post(`${this.apiUrl}/ProjectInvite/DeclineInvite`, null, {
      params: new HttpParams()
        .append('projectInviteId', projectInviteId.toString())
        .append('message', message)
    });
  }
}
