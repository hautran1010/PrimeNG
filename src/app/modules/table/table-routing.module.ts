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
      }
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
