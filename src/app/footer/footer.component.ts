import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [TranslateModule, DatePipe],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss', './footer-responsive.component.scss']
})
export class FooterComponent implements OnInit {
  datetime = new Date();

  constructor() {}

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    interval(1).subscribe((data) => {
      this.datetime = new Date();
    });
  }
}
