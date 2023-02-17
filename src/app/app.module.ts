import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { InvestmentPipe } from './investment.pipe';
import { CurrentPipe } from './current.pipe';
import { StatusPipe } from './status.pipe';
import { RecommendationPipe } from './recommendation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    InvestmentPipe,
    CurrentPipe,
    StatusPipe,
    RecommendationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
