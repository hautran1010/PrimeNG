import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog.component';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';
import { BasicDialogComponent } from './components/basic-dialog/basic-dialog.component';
import { DynamicDialogComponent } from './components/dynamic-dialog/dynamic-dialog.component';



const routes: Routes = [
  {
    path: '', component: DialogComponent,
    children: [
      { path: 'confirmdialog', component: ConfirmdialogComponent },
      { path: 'basicdialog', component: BasicDialogComponent },
      { path: 'dynamicdialog', component: DynamicDialogComponent }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class DialogRoutingModule { }
