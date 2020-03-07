import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { Observable } from 'rxjs';
import { Timezone } from '../../../interfaces/common/timezone';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class TimeZoneService {
  constructor(private httpService: HttpService) {}

  get apiUrl(): string {
    return environment.apiUrl;
  }

  getAllTimezones(): Observable<Timezone[]> {
    return this.httpService.get('TimeZone')
      .pipe(map((x: Timezone[]) => {
        return x;
      }));
  }
}
