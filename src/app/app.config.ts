import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from 'src/styles/storage.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule } from '@ngx-translate/core';
import { ModeToggleService } from 'src/styles/mode.service';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({}),
    importProvidersFrom([
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
};
