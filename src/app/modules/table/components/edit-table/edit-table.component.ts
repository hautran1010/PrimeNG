import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {
  products1!: Product[];

  products2!: Product[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: Product; } = {};
  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.productService.getAllProductSmall()
      .then(products => this.products1 = products);
    this.productService.getAllProductSmall()
      .then(products => this.products2 = products);
    this.statuses = [{ label: 'In Stock', value: 'INSTOCK' }, { label: 'Low Stock', value: 'LOWSTOCK' }, { label: 'Out of Stock', value: 'OUTOFSTOCK' }]
  }
  onRowEditInit(product: Product) {
    this.clonedProducts[product?.id!] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product?.price! > 0) {
      delete this.clonedProducts[product?.id!];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products2[index] = this.clonedProducts[product?.id!];
    delete this.clonedProducts[product?.id!];
  }
}
