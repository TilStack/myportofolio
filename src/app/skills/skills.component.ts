import { Component, OnInit } from '@angular/core';
import { AnimationDirective } from '../animations/animation.directive';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [AnimationDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-responsive.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
