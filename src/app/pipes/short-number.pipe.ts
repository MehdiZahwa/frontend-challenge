import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  transform(input: number, args?: number): string {
    let exp,
      suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];

    if (!input) {
      return input == 0 ? '0' : null;
    }

    if (input < 1000) {
      return input.toString();
    }

    exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }
}
