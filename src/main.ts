import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LoggingService} from './app/logging.service';
// import {APP_ROUTES_PROVIDER} from './app/app.route';
import {HttpModule} from '@angular/http'
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[LoggingService,HttpModule])
  .catch(err => console.log(err));
