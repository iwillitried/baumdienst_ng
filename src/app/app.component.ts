import { Component } from '@angular/core';
import {ContentType} from './full-width-element/enums/contentType.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  type = ContentType;
  title = 'BaumdienstNeuwied';
}
