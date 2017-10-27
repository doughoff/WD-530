import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
 
@Injectable()
export class WikipediaService {
  
  constructor(private jsonp: Jsonp) {}
  
    search(term: string) {

    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
        .map((request) => { 
            var results : any[] = [];
            if (term.trim()) {
                for (var i = 0; i < 100 && request.json()[1][i] ; i++ ) {
                    results.push({   
                        term:       request.json()[1][i], 
                        description: request.json()[2][i], 
                        link:       request.json()[3][i]
                    });
                }
                console.info('Data was in unusable format so map was used to transpose.')
                console.table(request["_body"]);
                console.info('Data is in good format.')
                console.table(results);
            }
            return results;
        } );
    }
}