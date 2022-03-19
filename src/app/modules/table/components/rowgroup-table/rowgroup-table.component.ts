import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-rowgroup-table',
  templateUrl: './rowgroup-table.component.html',
  styleUrls: ['./rowgroup-table.component.scss']
})
export class RowgroupTableComponent implements OnInit {
  customers: Customer[];
  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService.getCustomerAll()
      .then(customers => this.customers = customers)
  }
  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative.name === name) {
          total++;
        }
      }
    }

    return total;
  }

}
