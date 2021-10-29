import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appParallax]"
})
export class ParallaxDirective {

  @Input("ratio") parallaxRatio = 1;
  @Input("spin") spinRation = 0;
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any): void {
    debugger;
    if (this.parallaxRatio !== 1) {
      this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + "px";
    }

    if (this.spinRation !== 0) {
      const rotation: number = window.scrollY * this.spinRation;
      this.eleRef.nativeElement.style.transform = "rotate(" + rotation + "deg)";
    }
  }

}
