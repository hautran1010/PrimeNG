import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { PrimeNGModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { DyamicTableComponent } from './components/dyamic-table/dyamic-table.component';
import { CurdTableComponent } from './components/curd-table/curd-table.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReoderTableComponent } from './components/reoder-table/reoder-table.component';
import { RowgroupTableComponent } from './components/rowgroup-table/rowgroup-table.component';
import { ExportTableComponent } from './components/export-table/export-table.component';
import { StateTableComponent } from './components/state-table/state-table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';




@NgModule({
  declarations: [
    BasicTableComponent,
    TableComponent,
    DyamicTableComponent,
    CurdTableComponent,
    ReoderTableComponent,
    RowgroupTableComponent,
    ExportTableComponent,
    StateTableComponent,
    EditTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableRoutingModule,
    PrimeNGModule,
  ],
  providers: [ProductService, MessageService, ConfirmationService]
})
export class TableModule { }
