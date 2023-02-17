import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

stockDetails=[
  {stockId:501,stockName:'Tata Motors',stockIndustry:'Automobiles',stockPurchasePrice:150,stockCurrentPrice:200,stockQty:200},
  {stockId:502,stockName:'Chemicals',stockIndustry:'Chemicals',stockPurchasePrice:100,stockCurrentPrice:50,stockQty:100},
  {stockId:503,stockName:'Bajaj Fin',stockIndustry:'Finance',stockPurchasePrice:2000,stockCurrentPrice:1500,stockQty:200},
  {stockId:504,stockName:'ITC',stockIndustry:'Food',stockPurchasePrice:150,stockCurrentPrice:200,stockQty:200},
  {stockId:505,stockName:'ICICI Bank',stockIndustry:'Finance',stockPurchasePrice:1500,stockCurrentPrice:2000,stockQty:2000},
  {stockId:506,stockName:'Infosys',stockIndustry:'IT',stockPurchasePrice:2500,stockCurrentPrice:2000,stockQty:100},
  {stockId:507,stockName:'TCS',stockIndustry:'IT',stockPurchasePrice:4000,stockCurrentPrice:4500,stockQty:200},
  {stockId:508,stockName:'HCL Tech',stockIndustry:'IT',stockPurchasePrice:450,stockCurrentPrice:400,stockQty:300},
  {stockId:509,stockName:'HDFC Bank',stockIndustry:'Finance',stockPurchasePrice:1050,stockCurrentPrice:1500,stockQty:450},
  {stockId:510,stockName:'TVS',stockIndustry:'Automobiles',stockPurchasePrice:1000,stockCurrentPrice:2000,stockQty:500},
];
  constructor() { }

  ngOnInit(): void {
  }

}
