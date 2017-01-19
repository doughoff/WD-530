import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Wikipedia } from './wikipedia.component';
import { WikipediaSearch } from './wikipedia-search.component'
import { WikipediaService } from './wikipedia.service';

@NgModule({
  imports: [BrowserModule, JsonpModule, ReactiveFormsModule],
  declarations: [Wikipedia, WikipediaSearch],
  providers: [WikipediaService],
  bootstrap: [Wikipedia]
})
export class AppModule {} 