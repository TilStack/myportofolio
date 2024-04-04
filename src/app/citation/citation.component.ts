import { Component, OnInit } from '@angular/core';
import { faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss','./citation-responsive.component.scss']
})
export class CitationComponent implements OnInit{
  faSearch=faSearch

  ngOnInit(): void {
    
  }
  search(){}
}
