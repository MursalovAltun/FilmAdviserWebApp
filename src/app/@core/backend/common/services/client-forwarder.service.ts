import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ClientForwarder } from '../../../interfaces/movie-adviser/client-forwarder';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientForwarderService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getList(clientId: number): Observable<ClientForwarder[]> {
    return this.http
      .get(`${this.apiUrl}/ClientForwarder/GetByClient`, {
        params: new HttpParams().append('clientId', clientId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new ClientForwarder(y);
          });
        })
      );
  }

  getListForwarder(forwarderId: number): Observable<ClientForwarder[]> {
    return this.http
      .get(`${this.apiUrl}/ClientForwarder/GetByForwarder`, {
        params: new HttpParams().append('forwarderId', forwarderId.toString())
      })
      .pipe(
        map((x: any[]) => {
          return x.map(y => {
            return new ClientForwarder(y);
          });
        })
      );
  }

  create(data: ClientForwarder): Observable<any> {
    return this.http.post(`${this.apiUrl}/ClientForwarder`, data);
  }

  delete(clientForwarderId: number) {
    return this.http.delete(`${this.apiUrl}/ClientForwarder`, {
      params: new HttpParams().append(
        'clientForwarderId',
        clientForwarderId.toString()
      )
    });
  }

  update(clientForwarderId: number, data: ClientForwarder) {
    return this.http.put(`${this.apiUrl}/ClientForwarder`, data, {
      params: new HttpParams().append(
        'clientForwarderId',
        clientForwarderId.toString()
      )
    });
  }
}
