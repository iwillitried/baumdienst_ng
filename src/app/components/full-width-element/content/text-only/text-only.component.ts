import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text-only",
  templateUrl: "./text-only.component.html",
  styleUrls: ["./text-only.component.scss"]
})
export class TextOnlyComponent implements OnInit {
  paragraphs: {left: {title: string, content: string}[], right: {title: string, content: string}[]};
  romanNumbers: string[];

  constructor() {
    this.paragraphs = {
      left: [
        {title: "Baumfällung", content: "Das ist der Text"},
        {title: "Baumpflege", content: "Das ist der andere Text"}],
      right: [
        {title: "Baumfräsen", content: "Das ist der Fräsentext"},
        {title: "Baumkontrolle", content: "Das ist der Kontrolletext"},
        {title: "Jahrespflege im Rahmen der Begutachtung", content: "Der Text der Jahrespflege!"}]
    };
    this.romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  }


  ngOnInit(): void {
  }

}
