import { Component, OnInit } from '@angular/core';
import { faArrowRight,faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss','./aboutme-responsive.component.scss']
})
export class AboutmeComponent implements OnInit {
  faArrowRight=faArrowRight
  faHeart=faHeart
  number="2"
  number2="1"
  constructor() { }

  ngOnInit() {
    
  }
  navigateTo(url:string):void{
    window.location.href=url
  }
}
