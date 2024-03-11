import { Component, OnInit } from '@angular/core';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss','./aboutme-responsive.component.scss']
})
export class AboutmeComponent implements OnInit {
  faArrowRight=faArrowRight
  constructor() { }

  ngOnInit() {
    
  }

}
