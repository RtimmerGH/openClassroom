import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength = 50): string {
    if (value.length <= 50) {
      console.log('tata');
      return value;
    }
    console.log('toto');
    return value.substring(0,maxLength) + '...';
  }
}
