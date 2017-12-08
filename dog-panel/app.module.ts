import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogPanel }       from './dog-panel.component';
import {CurlyQuotesPipe}  from './curlyquotes.pipe';
import {DogDetail}        from './dog-detail.component';

@NgModule({
  imports:      [ BrowserModule
  //, FeatureModule , FormsModule, HttpModule
  ],
  declarations: [ DogPanel, CurlyQuotesPipe, DogDetail ],
  bootstrap:    [ DogPanel ]
})
export class AppModule { }