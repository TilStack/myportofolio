import { Component, OnInit } from '@angular/core';
import { faBars, faXmark,faMoon,faSun,faSearch,faClose } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-appBar',
  templateUrl: './appBar.component.html',
  styleUrls: ['./appBar.component.css','./app-bar-responsive.component.css']
})
export class AppBarComponent implements OnInit {
  faBars=faBars
  faXmark=faXmark
  faMoon=faMoon
  faSun=faSun
  faSearch=faSearch
  faClose=faClose
  isSearchVisible = false;
  isOpen=false
  isToggle=false
  searchValue: string = '';
  constructor() { }

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
