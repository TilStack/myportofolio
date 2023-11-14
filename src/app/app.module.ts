import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './appBar/appBar.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [		
    AppComponent,
      AppBarComponent,
      SplashComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
