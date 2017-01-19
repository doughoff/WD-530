import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { BasicComponent }  from './basic.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ BasicComponent ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
