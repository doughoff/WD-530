import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import {provide, PLATFORM_PIPES} from '@angular/core';
import { CurlyQuotesPipe } from './curlyquotes.pipe';

// platformBrowserDynamic().bootstrapModule(AppModule, [ provide(PLATFORM_PIPES, {useValue: [CurlyQuotesPipe]
//     , multi: true}) ]);

platformBrowserDynamic().bootstrapModule(AppModule);