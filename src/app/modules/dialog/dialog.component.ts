import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  displayBasic!: boolean;
  showBasicDialog() {
    this.displayBasic = true;
  }
  constructor() { }

  ngOnInit(): void {

  }

}
