import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  getAllProductSmall() {
    return this._http.get<any>('../../../assets/product-small.json')
      .toPromise()
      .then(response => <Product[]>response.data)
      .then(data => data)
  }
}
