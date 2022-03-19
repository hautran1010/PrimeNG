import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }
  getCustomerAll() {
    return this._http.get<any>('../../../assets/customer-medium.json')
      .toPromise()
      .then((response: any) => <Customer[]>response.data)
      .then(data => data)
  }
}
