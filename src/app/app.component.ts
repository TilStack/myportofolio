import { Component, HostListener, OnInit } from '@angular/core';
import { SplashAnimationType } from './splash/type';
import { Mode } from 'src/styles/mode.model';
import { ModeToggleService } from 'src/styles/mode.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from './appBar/appBar.component';
import { FooterComponent } from './footer/footer.component';
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppBarComponent,
    FooterComponent,
    SplashComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faArrowUp = faArrowUp;
  title = 'myportofolio';
  pageYoffset = 0;
  animationTyp: SplashAnimationType;
  currentMode: Mode = Mode.LIGHT;
  constructor(
    private modeToggleService: ModeToggleService,
    private scroll: ViewportScroller,
    private translateService: TranslateService
  ) {
    /**
     * Example code that demonstrate the modeChanged$ observable behavior and usage
     */
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
    console.log('............' + this.currentMode + '...............');
  }

  ngOnInit(): void {
    this.animationTyp = SplashAnimationType.FadeOut;
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
