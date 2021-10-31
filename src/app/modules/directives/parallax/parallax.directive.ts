import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appParallax]"
})
export class ParallaxDirective {

  @Input("ratio") parallaxRatio = 1;
  @Input("spin") spinRation = 0;
  @Input("scale") scaleRation = 0;
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    //this.eleRef.nativeElement.style.transition = "transform ease";
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any): void {
    let transformString = "";
    let topString = "";
    if (this.parallaxRatio !== 1) {
      topString += (this.initialTop - (window.scrollY * this.parallaxRatio)) + "px";
    }

    if (this.spinRation !== 0) {
      transformString += transformString ? " " : "";
      const rotation: number = window.scrollY * this.spinRation;
      transformString += "rotate(" + rotation + "deg)";
    }

    if (this.scaleRation !== 0) {
      transformString += transformString ? " " : "";
      const scale: number = 1 + 0.001 * (this.initialTop + (window.scrollY * this.scaleRation));
      transformString += "scale(" + scale + ")";
    }

    if (transformString) {
      this.eleRef.nativeElement.style.transform = transformString;
    }
    if (topString) {
      this.eleRef.nativeElement.style.top = topString;
    }
  }

}
