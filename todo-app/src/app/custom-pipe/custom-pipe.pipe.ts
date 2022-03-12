import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  nvaule: string = '';
  transform(value: string, ...args: unknown[]): any {
    this.nvaule = value.split('').reverse().join('');

    return this.nvaule;
  }

}
