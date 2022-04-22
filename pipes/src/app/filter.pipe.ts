import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // call pipe when anything changes on page
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, propName: string): any {
    if (value.length === 0 || !filteredString) {
      return value;
    }

    const resultArr = [];
    for (const item of value) {
      if (item[propName] === filteredString) {
        resultArr.push(item);
      }

    }
    return resultArr;
  }
}
