import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import Wijmo modules
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';
@NgModule({
  exports: [
    WjInputModule,
    WjChartModule,
    WjChartAnimationModule
  ]
})
export class WijmoModule { }
