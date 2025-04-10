import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appAnimation]',
})
export class AnimationDirective {
  @Input('appAnimation') orderShow = 0;
  constructor(private el: ElementRef) {
    const ratio = 0.1;
    const options = {
      root: null, // display zone
      roorMargin: '0px', //display margin
      threshold: ratio, //animation start if 10% of section is showing on screen
    };

    this.el.nativeElement.classList.add(
      `reveal-${this.orderShow}` || 'reveal-2'
    );

    const handleIntersect = function (entries: any, observer: any) {
      entries.forEach(function (entry: any) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    //observe Element
    observer.observe(this.el.nativeElement);
  }
}
