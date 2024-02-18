import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './appBar/appBar.component';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorksComponent } from './works/works.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';
import { ModeToggleService } from 'src/styles/mode.service';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from 'src/styles/storage.service';
import { AnimationDirective } from './animations/animation.directive';
import { CitationComponent } from './citation/citation/citation.component';

@NgModule({
  declarations: [									
    AppComponent,
    AppBarComponent,
    SplashComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutmeComponent,
    WorksComponent,
    ExperiencesComponent,
    ContactmeComponent,
    FooterComponent,
    AnimationDirective,
    CitationComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports: [
    AnimationDirective,
  ],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
