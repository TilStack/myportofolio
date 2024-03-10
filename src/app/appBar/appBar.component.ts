import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import { ModeToggleService } from 'src/styles/mode.service';
@Component({
  selector: 'app-appBar',
  templateUrl: './appBar.component.html',
  styleUrls: ['./appBar.component.scss','./app-bar-responsive.component.scss']
})
export class AppBarComponent implements OnInit {
  faBars=faBars
  faXmark=faXmark
  isSearchVisible = false;
  isOpen=false
  isToggle=false
  searchValue: string = '';
  activeLink:string=''
  ;
  constructor(private router: Router,private modeToggleService: ModeToggleService) {
   
  }

  toggleSearchView() {
    this.isSearchVisible = !this.isSearchVisible;
  }
  toggleMenu(){
    this.isOpen=!this.isOpen
  }
  clearSearchInput() {
    this.searchValue = ''; // Réinitialise la valeur de l'input à une chaîne vide
  }
  toggleButton(){
    this.modeToggleService.toggleMode()
    this.isToggle=!this.isToggle    
  }


  ngOnInit() {!
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
  }

  
}
