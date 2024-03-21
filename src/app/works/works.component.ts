import { Component, OnInit } from '@angular/core';
import { faShare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss','./works-responsive.component.scss']
})
export class WorksComponent implements OnInit {
  faShare=faShare
  constructor() { }

  ngOnInit() {
  }

}
