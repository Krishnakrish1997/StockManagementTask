import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investment'
})
export class InvestmentPipe implements PipeTransform {

  transform(value: number,stockQty:number) {
    return value * stockQty;
  }

}
