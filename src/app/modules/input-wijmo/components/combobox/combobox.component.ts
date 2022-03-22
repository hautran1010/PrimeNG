import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {
  strings!: string[];
  objects!: any[];
  countries!: string[];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.strings = this._dataService.getCountries();
    this.objects = this._dataService.getDataAll();
    this.countries = this._dataService.getCountries();
  }

}
