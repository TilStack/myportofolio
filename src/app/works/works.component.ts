import { Component, OnInit } from '@angular/core';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { AnimationDirective } from '../animations/animation.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-works',
    imports: [AnimationDirective, TranslateModule],
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.scss', './works-responsive.component.scss']
})
export class WorksComponent implements OnInit {
  faShare = faShare;
  constructor() {}

  ngOnInit() {}
}
