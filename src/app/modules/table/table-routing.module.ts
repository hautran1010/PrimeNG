import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { DyamicTableComponent } from './components/dyamic-table/dyamic-table.component';
import { CurdTableComponent } from './components/curd-table/curd-table.component';
import { ReoderTableComponent } from './components/reoder-table/reoder-table.component';
import { RowgroupTableComponent } from './components/rowgroup-table/rowgroup-table.component';
import { ExportTableComponent } from './components/export-table/export-table.component';
import { StateTableComponent } from './components/state-table/state-table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { SelectionTableComponent } from './components/selection-table/selection-table.component';
import { LazyloadTableComponent } from './components/lazyload-table/lazyload-table.component';

const routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: 'basic-table',
        component: BasicTableComponent
      }, {
        path: 'dyamic-table',
        component: DyamicTableComponent
      }
      , {
        path: 'curd-table',
        component: CurdTableComponent
      },
      {
        path: 'reoder-table',
        component: ReoderTableComponent
      },
      {
        path: 'rowgroup-table',
        component: RowgroupTableComponent
      },
      {
        path: 'export-table',
        component: ExportTableComponent
      },
      {
        path: 'state-table', component: StateTableComponent
      },
      {
        path: 'edit-table', component: EditTableComponent
      },
      { path: 'filter-table', component: FilterTableComponent },
      { path: 'selection-table', component: SelectionTableComponent },
      { path: 'lazy-table', component: LazyloadTableComponent }
    ]

  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableRoutingModule { }
