import {Component, Input, OnInit} from "@angular/core";
import {ContentType} from "../enums/contentType.enum";


@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  type = ContentType;
  @Input() contentType: ContentType = ContentType.empty;
  constructor() { }

  ngOnInit(): void {
  }

}
