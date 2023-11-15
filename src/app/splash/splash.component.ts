import { Component, Input, OnInit } from '@angular/core';
import { SplashAnimationType } from './type';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss','splash-responsive.component.scss']
})
export class SplashComponent implements OnInit {

  windowWidth:string;
  showSplash:boolean=true;
  opacityChange:number=1;
  splashTransition:string;

  @Input() animationDuration:number=1;
  @Input() duration:number=3;
  @Input() animationType:SplashAnimationType=SplashAnimationType.SlideLeft;

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle='';
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth='-'+window.innerWidth+'px';
          transitionStyle='left '+this.animationDuration+'s';
          break;
        case SplashAnimationType.slideRight:
            this.windowWidth=window.innerWidth+'px';
            transitionStyle='right '+this.animationDuration+'s';
            break;
        case SplashAnimationType.FadeOut:
            transitionStyle='opacity '+this.animationDuration+'s';
            this.opacityChange=0;
            break;
        default:
            this.windowWidth='-'+window.innerWidth+'px';
            transitionStyle='left '+this.animationDuration+'s';
          break;
      }
      this.splashTransition=transitionStyle;
      setTimeout(() => {     
        this.showSplash=!this.showSplash;
      }, this.animationDuration*1000);
    }, this.duration*1000);
  }
}
