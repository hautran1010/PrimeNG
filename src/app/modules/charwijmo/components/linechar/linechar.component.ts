import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-linechar',
  templateUrl: './linechar.component.html',
  styleUrls: ['./linechar.component.scss']
})
export class LinecharComponent implements OnInit {
  data!: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.data = this._dataService.getDataLine();
  }

}
