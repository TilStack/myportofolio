import { NgModule, isDevMode } from '@angular/core';
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
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';
import { ModeToggleService } from 'src/styles/mode.service';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from 'src/styles/storage.service';
import { AnimationDirective } from './animations/animation.directive';
import { CitationComponent } from './citation/citation.component';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServiceWorkerModule } from '@angular/service-worker';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [									
    AppComponent,
    AppBarComponent,
    SplashComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutmeComponent,
    WorksComponent,
    SkillsComponent,
    ContactmeComponent,
    FooterComponent,
    AnimationDirective,
    CitationComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,  
    HttpClientModule,
    TranslateModule.forRoot(
      {
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }
  ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // provideFirebaseApp(()=>initializeApp(environment.firebase)),
    // provideFirestore(()=>getFirestore()),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
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
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
