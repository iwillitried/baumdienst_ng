import {Component, Input, OnInit} from '@angular/core';
import {ContentType} from '../enums/contentType.enum';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  type = ContentType;
  @Input() contentType: ContentType = ContentType.empty;
  public imageUrl = './assets/background/tree.jpeg';
  public content1 = './assets/content/img1.jpeg';
  public content2 = './assets/content/img2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
