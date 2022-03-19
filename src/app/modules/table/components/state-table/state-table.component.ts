import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.scss']
})
export class StateTableComponent implements OnInit {
  customers1!: Customer[];

  customers2!: Customer[];

  selectedCustomer1!: Customer;

  selectedCustomer2!: Customer;
  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService.getCustomerAll()
      .then(customers => {
        this.customers1 = customers;
        this.customers2 = customers;
      })
  }

}
