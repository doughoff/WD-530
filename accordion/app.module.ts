import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Accordion }  from './accordion.component';

// feature modules
// import {FeatureModule} from './feature/feature.module';

@NgModule({
  imports:      [ BrowserModule
  //, FeatureModule , FormsModule, HttpModule
  ],
  declarations: [ Accordion ],
  bootstrap:    [ Accordion ]
})
export class AppModule { }
