import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'current'
})
export class CurrentPipe implements PipeTransform {

  transform(value: number,stockQty:number) {
    return value * stockQty;
  }

}
