import { Component, OnInit } from "@angular/core";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: "app-text-and-image",
  templateUrl: "./text-and-image.component.html",
  styleUrls: ["./text-and-image.component.scss"]
})
export class TextAndImageComponent implements OnInit {
  imageUrl = "./assets/content/fall.jpg";
  constructor() {

  }

  ngOnInit(): void {

  }

}
