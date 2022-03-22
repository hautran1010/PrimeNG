import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharwijmoComponent } from './charwijmo.component';
import { CharwijmoRoutingModule } from './charwijmo-routing.module';
import { BarcharComponent } from './components/barchar/barchar.component';
import { WijmoModule } from 'src/app/shared/modules/wijmo/wijmo/wijmo.module';
import { LinecharComponent } from './components/linechar/linechar.component';



@NgModule({
  declarations: [
    CharwijmoComponent,
    BarcharComponent,
    LinecharComponent
  ],
  imports: [
    CommonModule,
    CharwijmoRoutingModule,
    WijmoModule
  ]
})
export class CharwijmoModule { }
