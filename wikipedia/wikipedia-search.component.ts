import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { FormControl } from '@angular/forms';
import { Observable }       from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'wikipedia-search',
  styleUrls: ['./wikipedia-search.component.css'],
  templateUrl: './wikipedia-search.component.html'
})
export class WikipediaSearch {

  private items: Observable<any>;
  private term = new FormControl();

  constructor(private wikipediaService: WikipediaService) { }

  public ngOnInit() {
    this.items = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term));
  }
}