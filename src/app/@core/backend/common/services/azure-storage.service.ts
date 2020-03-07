import { AzureStorageFile } from '../../../interfaces/movie-adviser/azure-storage-file';
import { Sas } from '../../../interfaces/movie-adviser/sas';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AzureStorageService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getProjectSas(projectId: number): Observable<Sas> {
    return this.http
      .get(`${this.apiUrl}/AzureStorage/GetProjectSas`, {
        params: new HttpParams().append('projectId', projectId.toString())
      })
      .pipe(
        map(x => {
          return new Sas(x);
        })
      );
  }

  getProjectInviteSas(projectInviteId: number): Observable<Sas> {
    return this.http
      .get(`${this.apiUrl}/AzureStorage/GetProjectInviteSas`, {
        params: new HttpParams().append('projectInviteId', projectInviteId.toString())
      })
      .pipe(
        map(x => {
          return new Sas(x);
        })
      );
  }

  addProjectFile(azureStorageFile: AzureStorageFile) {
    return this.http
      .post(`${this.apiUrl}/AzureStorage/AddProjectFile`, azureStorageFile)
      .pipe(
        map(x => {
          return new AzureStorageFile(x);
        })
      );
  }

  deleteFile(azureStorageFileId: number) {
    return this.http.delete(`${this.apiUrl}/AzureStorage/DeleteFile`, {
      params: new HttpParams().append(
        'azureStorageFileId',
        azureStorageFileId.toString()
      )
    });
  }
}
