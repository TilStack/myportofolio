import { Component, OnInit } from '@angular/core';
import { AnimationDirective } from '../animations/animation.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home-responsive.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goOnPageMe(){
    this.router.navigate(['/about'])
  }

}
