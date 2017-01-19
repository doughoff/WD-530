import { NgModule }      from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Form }  from './form.component';
import {NameAddressForm} from './name-address.component';
import { GrumpyCityValidator} from './form.validator';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule],
  declarations: [ Form, NameAddressForm, GrumpyCityValidator ],
  bootstrap:    [ Form ]
})
export class AppModule { }
