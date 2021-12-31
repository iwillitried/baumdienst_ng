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
  @Input() params?: { left: string[], right: string[] };

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.contentType);
    console.log(this.params);
  }

}
