import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommendation'
})
export class RecommendationPipe implements PipeTransform {

  transform(value: number,purchasePrice:number,currentPrice:number){
    let purchaseValue = (value *purchasePrice);
    let currentValue= (value*currentPrice);
    let profit = (((currentValue - purchaseValue)/purchaseValue)*100);
    let loss =(((purchaseValue-currentValue)/purchaseValue)*100);
    if(purchaseValue <= currentValue){
     if(profit >20)
      return "Sell";
      if(profit >0 && profit <=15)
      return "Hold";
    }
    else if (purchaseValue > currentValue){
      if(loss >=40)
      return "Sell";
      if(loss >0 && loss <=15)
      return "Hold";
      if(loss >=20 && loss <40)
      return "BuyMore";
    }
    return '';
  }

}
