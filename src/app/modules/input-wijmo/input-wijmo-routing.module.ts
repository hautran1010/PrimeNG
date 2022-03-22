import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { WijmoComponent } from './wijmo.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { MultiSelectcontrolComponent } from './components/multi-selectcontrol/multi-selectcontrol.component';
import { LableinputComponent } from './components/lableinput/lableinput.component';


const routes: Routes = [
  {
    path: '', component: WijmoComponent,
    children: [
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'combobox', component: ComboboxComponent },
      { path: 'multi-selectcontrol', component: MultiSelectcontrolComponent },
      { path: 'label-input', component: LableinputComponent }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InputWijmoRoutingModule { }
