import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortKeyword: string): any {
    if (value.length === 0 || !sortKeyword) {
      return value;
    }

    const orderedArray = value.sort(
      (elem1: { [x: string]: any }, elem2: { [x: string]: any }) =>
        elem1[sortKeyword] > elem2[sortKeyword] ? 1 : -1
    );

    return orderedArray;
  }
}
