import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModeToggleService } from 'src/styles/mode.service';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from 'src/styles/storage.service';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePipe } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [AppComponent],
  // Removed bootstrap array as AppComponent is standalone

  providers: [
    DatePipe,
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
    HttpClient,
    {
      provide: HttpClient,
      useFactory: () => provideHttpClient(withInterceptorsFromDi()),
    },
  ],
})
export class AppModule {}
