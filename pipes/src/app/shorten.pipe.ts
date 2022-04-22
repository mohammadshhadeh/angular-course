import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number, id: string) {
        if (value.length > limit) {
            return `${id} ${value.substr(0, limit)} ...`;
        }

        return value;
    }
}
