import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse',
})
export class ReversePipe implements PipeTransform {
    transform(value: string) {
        if (value) {
            return value.split('').reverse().join('');
        }

        return value;
    }
}