import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-multi-selectcontrol',
  templateUrl: './multi-selectcontrol.component.html',
  styleUrls: ['./multi-selectcontrol.component.scss']
})
export class MultiSelectcontrolComponent implements OnInit {
  data!: any[];
  showFilterInput = false;
  showSelectAllCheckbox = false;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.data = this._dataService.getData();
  }

}
