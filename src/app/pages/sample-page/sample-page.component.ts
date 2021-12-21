import { Component, OnInit } from '@angular/core';
import {AddressSampleData} from "./shared/address-sample.model";

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  form: any = {
    currentLocation: '',
    destination: ''
  };//using template driven forms

  sampleAddressData: Array<AddressSampleData> = [
    {
      fullAddress: 'Road 27, Carlton Gate Estate, Chevron Drive, Lekki, Lagos',
      address1: 'Road 27, Carlton Gate Estate',
      address2: 'Chevron Drive, Lekki, Lagos',
      street: '',
      latitude: 1.91,
      longitude: 4.05
    },
    {
      fullAddress: 'Road 27, LA Lagos, Nigeria, NG 102543',
      address1: 'Road 27',
      address2: 'LA Lagos, Nigeria, NG 102543',
      street: '',
      latitude: 1.31,
      longitude: 2.05
    },
    {
      fullAddress: 'Road 2, Ikota Villa',
      address1: 'Road 2, Ikota Villa',
      address2: 'Ikota Estate, Lekki, Lagos',
      street: '',
      latitude: 1.81,
      longitude: 2.45
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  //This can also be achieved with a managed state//redux pattern or using some shared data state
  handleAddressSelection(value: AddressSampleData){
    console.log({value});
    this.form.currentLocation = value.address1;
  }

  handleSubmit() {

  }

}
