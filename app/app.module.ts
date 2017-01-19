import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// feature modules
import {FeatureModule} from './feature/feature.module';

@NgModule({
  imports:      [ BrowserModule, FeatureModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
