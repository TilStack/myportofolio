import { Component, OnInit } from '@angular/core';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationDirective } from '../animations/animation.directive';

@Component({
  selector: 'app-citation',

  standalone: true,
  imports: [TranslateModule,AnimationDirective],
  templateUrl: './citation.component.html',
  styleUrls: [
    './citation.component.scss',
    './citation-responsive.component.scss',
  ],
})
export class CitationComponent implements OnInit {
  faSearch = faSearch;
  faHeart = faHeart;
  number = '2';
  number2 = '1';
  ngOnInit(): void {}
  search() {}

  navigateTo(url: string): void {
    window.location.href = url;
  }
}
