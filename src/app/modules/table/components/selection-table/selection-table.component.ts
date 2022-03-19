import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-selection-table',
  templateUrl: './selection-table.component.html',
  styleUrls: ['./selection-table.component.scss'],
  providers: [MessageService]
})
export class SelectionTableComponent implements OnInit {

  products!: Product[];

  selectedProduct1!: Product;

  selectedProduct2!: Product;

  selectedProduct3!: Product;

  selectedProducts1!: Product[];

  selectedProducts2!: Product[];

  selectedProducts3!: Product[];

  selectedProducts4!: Product[];

  selectedProducts5!: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) {
    this.isRowSelectable = this.isRowSelectable.bind(this);
  }

  ngOnInit() {
    this.productService.getAllProductSmall().then(data => this.products = data);
  }

  selectProduct(product: Product) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }

  isRowSelectable(event: any) {
    return !this.isOutOfStock(event.data);
  }

  isOutOfStock(data: any) {
    return data.inventoryStatus === 'OUTOFSTOCK';
  }

}
