import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [],
  templateUrl: './pagenotfound.component.html',
  styleUrls: [
    './pagenotfound.component.scss',
    './pagenotfound.component-responsive.scss',
  ],
})
export class PagenotfoundComponent implements OnInit {
  faArrowRight = faArrowRight;
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
