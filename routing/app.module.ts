import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { Routing,  A, B, C }  from './routing.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'aPath', pathMatch: 'full' },
  { path: 'aPath', component: A },
  { path: 'bPath', component: B },
  { path: 'cPath', component: C },
  { path: 'dPath', redirectTo: 'cPath' },
  { path: '**', component: A }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(ROUTES, {enableTracing: true, useHash: false})],
  declarations: [ Routing, A, B, C  ],
  bootstrap:    [ Routing ]
})
export class AppModule { }
