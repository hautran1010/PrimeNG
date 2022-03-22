import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWijmoRoutingModule } from './input-wijmo-routing.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { WijmoComponent } from './wijmo.component';
import { RouterModule } from '@angular/router';
import { WijmoModule } from 'src/app/shared/modules/wijmo/wijmo/wijmo.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectcontrolComponent } from './components/multi-selectcontrol/multi-selectcontrol.component';
import { LableinputComponent } from './components/lableinput/lableinput.component';




@NgModule({
  declarations: [
    AutocompleteComponent,
    WijmoComponent,
    CalendarComponent,
    ComboboxComponent,
    MultiSelectcontrolComponent,
    LableinputComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    InputWijmoRoutingModule,
    WijmoModule
  ]
})
export class InputWijmoModule { }
