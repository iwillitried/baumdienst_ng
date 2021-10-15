import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logoUrl = './assets/logo/Logo _Colored.svg';
  isFixed = false;

  constructor(
  ) { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.scrollY > 90) {
      this.isFixed = true;
    }

    if (window.scrollY < 70) {
      this.isFixed = false;
    }
  }


  ngOnInit(): void {
  }

}
