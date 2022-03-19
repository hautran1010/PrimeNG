import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  products!: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAllProductSmall()
      .then(data => {
        console.log('data', data);
        this.products = data;
      })
  }

}
