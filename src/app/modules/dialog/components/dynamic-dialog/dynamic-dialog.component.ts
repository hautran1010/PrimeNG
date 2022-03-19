import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/shared/model/product.model';
import { ProductListDemo } from '../productlistdemo/productlistdemo';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent implements OnInit, OnDestroy {
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit(): void {
  }
  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });
  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
