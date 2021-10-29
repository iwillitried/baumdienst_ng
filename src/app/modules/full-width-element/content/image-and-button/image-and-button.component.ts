import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: "app-image-and-button",
  templateUrl: "./image-and-button.component.html",
  styleUrls: ["./image-and-button.component.scss"]
})
export class ImageAndButtonComponent implements OnInit, AfterViewInit {
  public imageUrl: string = "./assets/background/wood-slice.jpg";
  @ViewChild("parallax") parralax!: ElementRef;
  // @ViewChild("trigger") public trigger!: HTMLElement;
  // @ViewChild("goal") public goal!: HTMLElement;
  constructor() { }

  @HostListener("scroll")
  onScroll(): void {
    /*console.log("Scrollling", "this.parralax.offsetTop", this.parralax.offsetTop);
    if (this.parralax.offsetTop > 30) {
      console.log("YESS");
      window.scrollBy(0, 40);
    }*/
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    /*
    const int = setInterval(() => {
      console.log("Scroll:", this.parralax.nativeElement.scrollTop);
      if (this.parralax.nativeElement.scrollTop > 130) {
        console.log("Scrolled!");
        this.parralax.nativeElement.scrollBy({
          top: 200,
          left: 0,
          behavior : "smooth"
        });
        setTimeout(() => { window.scrollBy({
          top: 450,
            left: 0,
            behavior : "smooth"
        });


        }, 150);
        clearInterval(int);
      }
    }, 100);
    */
    // const callback = (entries: any[], observer: any) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       //this.goal.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    //       console.log("HALLOOOOO");
    //     }
    //   });
    // };
    //
    // const myObserver = new IntersectionObserver(callback, {})
    // myObserver.observe(this.trigger);
  }
}
