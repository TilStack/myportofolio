import { Component, OnInit } from '@angular/core';
import { SplashAnimationType } from './splash/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myportofolio';
  animationTyp:SplashAnimationType;
  ngOnInit(): void {
    this.animationTyp=SplashAnimationType.FadeOut;
  }
}
