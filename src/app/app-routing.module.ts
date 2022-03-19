import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dialog',
    loadChildren: () => import('./modules/dialog/dialog.module').then(m => m.DialogModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
