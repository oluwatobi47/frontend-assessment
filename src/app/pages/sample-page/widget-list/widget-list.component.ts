import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressSampleData} from "../shared/address-sample.model";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  @Input() addressList!: Array<AddressSampleData>;

  @Output() addressSelected: EventEmitter<AddressSampleData> = new EventEmitter<AddressSampleData>();

  constructor() { }

  ngOnInit(): void {
  }
  handleAddressSelection(value: AddressSampleData) {
    this.addressSelected.emit(value);
  }

}


