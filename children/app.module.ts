import { NgModule  }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Children, OrganizingChild, IgnoringChild }  from './children.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ Children , OrganizingChild, IgnoringChild],
  bootstrap:    [ Children ]
})
export class AppModule { }
