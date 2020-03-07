import { Observable } from 'rxjs';
import { RequestTableColumn } from '../../../interfaces/movie-adviser/request-table-column';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

export class RequestTableColumnService {
  constructor(private http: HttpClient) {}
  get apiUrl(): string {
    return environment.apiUrl;
  }

  create(requestTableColumn: RequestTableColumn): Observable<RequestTableColumn> {
    return this.http.post(`${this.apiUrl}/RequestTableColumn`, requestTableColumn).pipe(
      map((x: any) => {
        return new RequestTableColumn(x);
      })
    );
  }
}
