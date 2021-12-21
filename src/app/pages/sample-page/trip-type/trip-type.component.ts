import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.scss']
})
export class TripTypeComponent implements OnInit {

  @Input() title!: string;
  @Input() icon!: string;

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.selected.emit(this.title);
  }

}
