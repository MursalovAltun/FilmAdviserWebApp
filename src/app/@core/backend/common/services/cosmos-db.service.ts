import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class CosmosDbService {
  constructor(private http: HttpClient) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getAllDocuments(requestTableId: number, type: string) {
    return this.http.get(`${this.apiUrl}/CosmosDb/GetAllDocuments`, {
      params: new HttpParams()
        .append('requestTableId', requestTableId.toString())
        .append('type', type)
    });
  }

  getForwarderDocuments(
    requestTableId: number,
    type: string,
    forwarderId: number,
    version: number
  ) {
    return this.http.get(`${this.apiUrl}/CosmosDb/GetForwarderDocuments`, {
      params: new HttpParams()
        .append('requestTableId', requestTableId.toString())
        .append('forwarderId', forwarderId.toString())
        .append('version', version.toString())
        .append('type', type)
    });
  }

  addDocuments(requestTableId: number, type: string, documents: any[]) {
    return this.http.post(`${this.apiUrl}/CosmosDb/AddDocuments`, documents, {
      params: new HttpParams()
        .append('requestTableId', requestTableId.toString())
        .append('type', type)
    });
  }

  updateDocuments(requestTableId: number, type: string, documents: any[]) {
    return this.http.put(`${this.apiUrl}/CosmosDb/UpdateDocuments`, documents, {
      params: new HttpParams()
        .append('requestTableId', requestTableId.toString())
        .append('type', type)
    });
  }

  updateForwarderDocuments(
    responseTableId: number,
    isValid: boolean,
    version: string,
    status: string,
    documents: any[]
  ) {
    return this.http.put(`${this.apiUrl}/CosmosDb/UpdateForwarderDocuments`, documents, {
      params: new HttpParams()
        .append('responseTableId', responseTableId.toString())
        .append('isValid', isValid.toString())
        .append('version', version)
        .append('status', status)
    });
  }

  deleteDocuments(requestTableId: number, type: string, documentIds: string[]) {
    return this.http.post(
      `${this.apiUrl}/CosmosDb/DeleteDocuments`,
      documentIds,
      {
        params: new HttpParams()
          .append('requestTableId', requestTableId.toString())
          .append('type', type)
      }
    );
  }
}
