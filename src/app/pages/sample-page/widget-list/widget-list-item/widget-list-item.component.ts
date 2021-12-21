import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressSampleData} from "../../shared/address-sample.model";

@Component({
  selector: 'app-widget-list-item',
  templateUrl: './widget-list-item.component.html',
  styleUrls: ['./widget-list-item.component.scss']
})
export class WidgetListItemComponent implements OnInit {

  @Input() address!: AddressSampleData;

  @Output() addressSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.addressSelected.emit(this.address);
  }

}
