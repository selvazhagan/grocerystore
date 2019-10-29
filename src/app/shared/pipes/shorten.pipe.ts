import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  pure: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args.length);
    console.log(value);
    console.log(args[0]);
    if(args.length > 0) {
      if( value.length > args[0] ) {
        console.log(value.substr(0,args[0]));
        return value.substr(0,args[0]);
      }
    }
    return value;
  }

}
