import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-button',
  templateUrl: './image-and-button.component.html',
  styleUrls: ['./image-and-button.component.scss']
})
export class ImageAndButtonComponent implements OnInit {
  public imageUrl: string = './assets/background/wood-slice.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
