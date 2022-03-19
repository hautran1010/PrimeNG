import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { PrimeNGModule } from 'src/app/shared/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    PrimeNGModule,
  ]
})
export class DialogModule { }
