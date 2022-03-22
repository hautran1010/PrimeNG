import { Component, OnInit } from '@angular/core';
import { Control } from '@grapecity/wijmo';
import { ComboBox, MultiSelect } from '@grapecity/wijmo.input';
@Component({
  selector: 'app-lableinput',
  templateUrl: './lableinput.component.html',
  styleUrls: ['./lableinput.component.scss']
})
export class LableinputComponent implements OnInit {

  countries = 'US,UK,Japan,Germany,France,Italy,Russia,China'.split(',');
  colors = 'Black,White,Grey,Red,Green,Blue'.split(',');
  constructor() { }

  ngOnInit(): void {
  }

  // handle form submit and reset events
  submit(e: Event) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    alert('The form has been submitted.');
  }
  reset(e: Event) {
    let ctls = (e.target as HTMLFormElement).querySelectorAll('.wj-control');
    for (let i = 0; i < ctls.length; i++) {
      let ctl = Control.getControl(ctls[i]);
      if (ctl instanceof ComboBox && ctl.itemsSource) {
        ctl.selectedIndex = -1;
      }
      if (ctl instanceof MultiSelect) {
        ctl.checkedItems = [];
      }
    }
  }

}
