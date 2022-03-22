import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  data!: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.data = this._dataService.getData();
  }

}
