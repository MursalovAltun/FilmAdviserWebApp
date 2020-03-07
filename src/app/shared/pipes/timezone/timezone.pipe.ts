import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { UsersService } from '../../../@core/backend/common/services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'timezone',
})
export class TimezonePipe implements PipeTransform {
  constructor(private userService: UsersService) {}

  transform(value: any, offset?: string, format?: string): Observable<string> {
    if (!value) {
      return value;
    }
    return this.userService.getCurrentUser().pipe(map(user => {
      const d = moment.utc(value);
      if (!offset) {
        offset = user.timeZone.utcOffset;
      }
      if (offset[0] !== '-') {
        offset = '+' + offset;
      }
      d.utcOffset(offset);
      if (format) {
        return d.format(format);
      }
      return d.format('lll');
    }));
  }
}
