import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate',
})
export class SeparatePipe implements PipeTransform {
  transform(value: Array<string>, seperator: string = ','): string {
    return value.join(`${seperator} `);
  }
}
