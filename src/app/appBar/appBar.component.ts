import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faBars,
  faXmark,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { ModeToggleService } from 'src/styles/mode.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-appBar',
  standalone: true,
  imports: [BrowserModule, TranslateModule],
  templateUrl: './appBar.component.html',
  styleUrls: ['./appBar.component.scss', './app-bar-responsive.component.scss'],
})
export class AppBarComponent implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  faChevronDown = faChevronDown;
  isSearchVisible = false;
  isOpen = false;
  isToggle = false;
  searchValue: string = '';
  activeLink: string = '';
  lang: string = '';
  constructor(
    @Inject(Router) private router: Router,
    private modeToggleService: ModeToggleService,
    @Inject(TranslateService) private translateService: TranslateService
  ) {}

  toggleSearchView() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  clearSearchInput() {
    this.searchValue = ''; // Réinitialise la valeur de l'input à une chaîne vide
  }
  toggleButton() {
    this.modeToggleService.toggleMode();
    this.isToggle = !this.isToggle;
  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    !this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
  }
  ChangeLang(lang: any) {
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang', selectedLanguage);

    this.translateService.use(selectedLanguage);
  }
}
