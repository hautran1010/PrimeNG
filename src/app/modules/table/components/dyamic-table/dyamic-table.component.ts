import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-dyamic-table',
  templateUrl: './dyamic-table.component.html',
  styleUrls: ['./dyamic-table.component.scss']
})
export class DyamicTableComponent implements OnInit {
  products!: Product[];
  cols!: any[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAllProductSmall()
      .then(data => {
        this.products = data;
        console.log('data', data);

      })

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }

}
