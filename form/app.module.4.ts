import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { Form }  from './form.component';
import {NameAddressForm} from './name-address.component';
import { GrumpyCityValidator} from './form.validator';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ Form, NameAddressForm, GrumpyCityValidator ],
  bootstrap:    [ Form ]
})
export class AppModule { }
