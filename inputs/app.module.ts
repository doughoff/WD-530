import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Inputs, InputChild, DogList, DogName}  from './inputs.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [Inputs, InputChild, DogList, DogName],
  bootstrap:    [Inputs]

})
export class AppModule { }
