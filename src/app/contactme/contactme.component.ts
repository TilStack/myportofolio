import { Component, OnInit } from '@angular/core';
import { faRightFromBracket, faMailBulk} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss','./contactme-responsive.component.scss']
})
export class ContactmeComponent implements OnInit {

  faRightFromBracket=faRightFromBracket
  faMailReply=faMailBulk
  name:string
  constructor() { }

  ngOnInit() {
  }

}
