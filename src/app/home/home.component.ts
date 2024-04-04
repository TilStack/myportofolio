import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-responsive.component.scss']
})
export class HomeComponent implements OnInit {
  faArrowRight=faArrowRight

  constructor(private router: Router) { }

  ngOnInit() {
    // if (this.tiltImageRef) {
    //   VanillaTilt.init(this.tiltImageRef.nativeElement, { max: 25, speed: 400 });
    // }

    // if (this.tiltImagesRef) {
    //   VanillaTilt.init(this.tiltImagesRef.nativeElement);
    // }
  }

  goOnPageMe() {
    this.router.navigate(['/about']);
  }
}
