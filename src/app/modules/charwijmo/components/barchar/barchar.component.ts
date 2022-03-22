import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-barchar',
  templateUrl: './barchar.component.html',
  styleUrls: ['./barchar.component.scss']
})
export class BarcharComponent implements OnInit {
  data!: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.data = this._dataService.getDataChar();
  }

}
