import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharwijmoComponent } from './charwijmo.component';
import { BarcharComponent } from './components/barchar/barchar.component';
import { LinecharComponent } from './components/linechar/linechar.component';


const routes: Routes = [
  {
    path: '', component: CharwijmoComponent,
    children: [
      { path: 'barchar', component: BarcharComponent },
      { path: 'linechar', component: LinecharComponent }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CharwijmoRoutingModule { }
