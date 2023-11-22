import { Component, OnInit } from '@angular/core';
import { SplashAnimationType } from './splash/type';
import { Mode } from 'src/styles/mode.model';
import { ModeToggleService } from 'src/styles/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myportofolio';
  animationTyp:SplashAnimationType;
  currentMode: Mode = Mode.LIGHT;
  constructor(private modeToggleService: ModeToggleService) {
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
}
