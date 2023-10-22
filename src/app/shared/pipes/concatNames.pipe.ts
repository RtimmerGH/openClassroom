import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'concatNames'
})
export class ConcatNamesPipe implements PipeTransform {
  transform(lastName: string, firstName: string): string {
    return lastName.toUpperCase() + ' ' + firstName;
  }
}
