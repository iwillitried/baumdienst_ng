import { Component, OnInit } from "@angular/core";
import {ContentType} from "../../../modules/full-width-element/enums/contentType.enum";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  type = ContentType;
  constructor() { }

  ngOnInit(): void {
  }

}
