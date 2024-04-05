import { Component, OnInit } from '@angular/core';
import { faSearch, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss','./citation-responsive.component.scss']
})
export class CitationComponent implements OnInit{
  faSearch=faSearch
  faHeart=faHeart
  number="2"
  ngOnInit(): void {
    
  }
  search(){}
}
