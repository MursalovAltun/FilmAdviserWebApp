import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class TmdbPosterPipe implements PipeTransform {
  transform(value: any): string {
    return `https://image.tmdb.org/t/p/w500/${value}`;
  }
}
