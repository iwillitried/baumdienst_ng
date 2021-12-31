import {Component, OnInit} from '@angular/core';
import {ContentType} from '../../../modules/full-width-element/enums/contentType.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  type = ContentType;
  leistungenIDs: { left: string[], right: string[] };

  constructor() {
    this.leistungenIDs = {
      left: ['baumfaellung', 'baumpflege'],
      right: ['baumstumpffraesen', 'baumkontrolle', 'jahrespflege']
    };
  }

  ngOnInit(): void {
  }

}
