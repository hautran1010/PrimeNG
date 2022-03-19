import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../../shared/model/product.model';

@Component({
  selector: 'app-reoder-table',
  templateUrl: './reoder-table.component.html',
  styleUrls: ['./reoder-table.component.scss']
})
export class ReoderTableComponent implements OnInit {

  products!: Product[];

  cols!: any[];
  constructor(private _products: ProductService) { }

  ngOnInit(): void {
    this._products.getAllProductSmall().then(products => this.products = products);
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }

}
