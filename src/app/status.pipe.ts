import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number,purchasePrice:number,currentPrice:number){
    if((value *purchasePrice) <= (value*currentPrice)){
      return "Profit";
    }
    else{
      return "Loss";
    }
  }

}
