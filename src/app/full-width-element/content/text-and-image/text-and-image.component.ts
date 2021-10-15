import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-and-image',
  templateUrl: './text-and-image.component.html',
  styleUrls: ['./text-and-image.component.scss']
})
export class TextAndImageComponent implements OnInit {
  public content1: string = './assets/content/img1.jpeg';
  public content2: string = './assets/content/img2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
