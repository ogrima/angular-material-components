import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AppComponent } from './app.component';
import { DataAreaComponent } from './data-area/data-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DataAreaComponent
  ],
  imports: [
    BrowserModule,
    jqxBarGaugeModule,
    jqxChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
