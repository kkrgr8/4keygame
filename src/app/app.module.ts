import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
