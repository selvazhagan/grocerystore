import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup =  new FormGroup ({
  });
  address= {

  };

  constructor() { }

  ngOnInit() {
    this.registerForm['address'] = this.address;
  }

  address1Updated(address1:string) {
    console.log(address1);
    this.registerForm['address']['addressline1'] = address1;
  }

  address2Updated(address2:string) {
    this.registerForm['address']['addressline2'] = address2;
  }

  cityUpdated(city:string) {
    this.registerForm['address']['city'] = city;
  }

  stateUpdated(state:string) {
    this.registerForm['address']['state'] = state;
  }

  postalCodeUpdated(postalCode:string) {
    this.registerForm['address']['postalCode'] = postalCode;
  }

}
