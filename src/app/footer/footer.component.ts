import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./footer-responsive.component.scss']
})
export class FooterComponent implements OnInit {
  
  datetime = new Date()

  constructor() {  }

  ngOnInit() {
    this.startClock()
  }

  startClock(){
    interval(1).subscribe(data=>{
      this.datetime = new Date()
    })
  }

}
