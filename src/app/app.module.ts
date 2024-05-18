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
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';
import { ModeToggleService } from 'src/styles/mode.service';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from 'src/styles/storage.service';
import { AnimationDirective } from './animations/animation.directive';
import { CitationComponent } from './citation/citation.component';
import { environment } from 'src/environments/environment';
import { getFirestore,provideFirestore } from "@angular/fire/firestore";
import { provideFirebaseApp,initializeApp } from "@angular/fire/app";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
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
