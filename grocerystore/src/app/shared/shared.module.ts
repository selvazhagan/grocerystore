import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsDisplayDirective } from './directive/errors.directive';
import { UnlessDirective } from './directive/unless.directive';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { PhoneComponent } from './components/phone/phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    ErrorsDisplayDirective,
    UnlessDirective,
    NameComponent,
    AddressComponent,
    PhoneComponent,
    ShortenPipe,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorsDisplayDirective,
    UnlessDirective,
    NameComponent,
    AddressComponent,
    PhoneComponent,
    ShortenPipe,
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent
  ]
})
export class SharedModule { }
