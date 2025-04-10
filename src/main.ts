import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { ModeToggleService } from 'src/styles/mode.service';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from 'src/styles/storage.service';

bootstrapApplication(AppComponent, {
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
