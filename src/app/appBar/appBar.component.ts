import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-appBar',
  templateUrl: './appBar.component.html',
  styleUrls: ['./appBar.component.css','./app-bar-responsive.component.css']
})
export class AppBarComponent implements OnInit {
  faBars=faBars
  faXmark=faXmark
  isSearchVisible = false;
  isOpen=false
  isToggle=false
  searchValue: string = '';
  activeLink:string=''
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
      }
    });
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
    this.isToggle=!this.isToggle
  }


  ngOnInit() {
  }

  
}
