import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm : FormGroup = new FormGroup ({
    addresLine1 : new FormControl(''),
    addresLine2 : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    postalCode : new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  @Output() address1Event = new EventEmitter<string>();
  @Output() address2Event = new EventEmitter<string>();
  @Output() cityEvent = new EventEmitter<string>();
  @Output() stateEvent = new EventEmitter<string>();
  @Output() postalCodeEvent = new EventEmitter<string>();

  addressLine1Change() {
    console.log(this.addressForm.value);
    this.address1Event.emit(this.addressForm.value.addresLine1);
  }

  addressLine2Change() {
    this.address2Event.emit(this.addressForm.value.addresLine1);
  }

  addressCityChange() {
    this.cityEvent.emit(this.addressForm.value.addresLine1);
  }

  addressStateChange() {
    this.stateEvent.emit(this.addressForm.value.addresLine1);
  }

  addressPostalCodeChange() {
    this.postalCodeEvent.emit(this.addressForm.value.addresLine1);
  }

}
