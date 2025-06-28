import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser';
import 'zone.js';

if (environment.production) {
  enableProdMode();
}

platformBrowser()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err) => console.error(err));
