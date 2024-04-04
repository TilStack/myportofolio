import { Component, HostListener, OnInit } from '@angular/core';
import { SplashAnimationType } from './splash/type';
import { Mode } from 'src/styles/mode.model';
import { ModeToggleService } from 'src/styles/mode.service';
import { ViewportScroller } from '@angular/common';
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faArrowUp=faArrowUp
  title = 'myportofolio';
  pageYoffset = 0;
  animationTyp:SplashAnimationType;
  currentMode: Mode = Mode.LIGHT;
  constructor(private modeToggleService: ModeToggleService,private scroll: ViewportScroller) {
    /**
     * Example code that demonstrate the modeChanged$ observable behavior and usage
     */
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
    console.log('............'+this.currentMode+'...............')
  }
  
  ngOnInit(): void {
    this.animationTyp=SplashAnimationType.FadeOut;
  }

  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }
 
  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
