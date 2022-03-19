import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { PrimeNGModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BasicDialogComponent } from './components/basic-dialog/basic-dialog.component';
import { DynamicDialogComponent } from './components/dynamic-dialog/dynamic-dialog.component';
import { ProductListDemo } from './components/productlistdemo/productlistdemo';
import { ProductService } from 'src/app/services/product/product.service';
import { DialogService } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    DialogComponent,
    ConfirmdialogComponent,
    BasicDialogComponent,
    DynamicDialogComponent,
    ProductListDemo
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    PrimeNGModule,
  ],
  entryComponents: [
    ProductListDemo
  ],
  providers: [ProductService, MessageService, ConfirmationService, DialogService]
})
export class DialogModule { }
