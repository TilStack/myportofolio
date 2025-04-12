import { Component, OnInit } from '@angular/core';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationDirective } from '../animations/animation.directive';

@Component({
    selector: 'app-aboutme',
    imports: [TranslateModule, AnimationDirective],
    templateUrl: './aboutme.component.html',
    styleUrls: [
        './aboutme.component.scss',
        './aboutme-responsive.component.scss',
    ]
})
export class AboutmeComponent implements OnInit {
  faArrowRight = faArrowRight;
  faHeart = faHeart;
  number = '2';
  number2 = '1';
  constructor() {}

  ngOnInit() {}
  navigateTo(url: string): void {
    window.location.href = url;
  }
}
