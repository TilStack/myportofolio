import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ModeToggleService } from 'src/styles/mode.service';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from 'src/styles/storage.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  FakeMissingTranslationHandler,
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateDefaultParser,
  TranslateFakeCompiler,
  TranslateLoader,
  TranslateParser,
  TranslateService,
  TranslateStore,
  USE_DEFAULT_LANG,
  USE_STORE,
  USE_EXTEND,
  DEFAULT_LANGUAGE,
} from '@ngx-translate/core';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
bootstrapApplication(AppComponent, {
  providers: [
    TranslateService,
    TranslateStore,
    {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient],
    },
    {
      provide: TranslateCompiler,
      useClass: TranslateFakeCompiler, // Use a default implementation
    },
    {
      provide: TranslateParser, // Provide TranslateParser
      useClass: TranslateDefaultParser,
    },
    {
      provide: MissingTranslationHandler, // Provide MissingTranslationHandler
      useClass: FakeMissingTranslationHandler,
    },
    {
      provide: USE_DEFAULT_LANG,
      useValue: true, // Enable default language usage
    },
    {
      provide: USE_STORE,
      useValue: true, // Enable the use of TranslateStore
    },
    {
      provide: USE_EXTEND,
      useValue: true, // Enable the use of TranslateStore
    },
    {
      provide: DEFAULT_LANGUAGE,
      useValue: true, // Enable the use of TranslateStore
    },
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
