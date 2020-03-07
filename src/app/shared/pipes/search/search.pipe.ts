import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
    if (!term) {
      return value;
    }

    const result = (value || []).filter(item => keys.split(',')
                        .some(key => typeof item[key] !== 'undefined' && new RegExp(term, 'gi').test(item[key])));
    // return -1 if nothing found to handle on UI
    if (result.length === 0) {
      return [-1];
    }
    return result;
  }
}
