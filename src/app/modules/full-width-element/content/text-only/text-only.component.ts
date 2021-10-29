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
        {title: "Baumfällung", content: "Hier sollten ausschließlich Spezialisten eingesetzt werden.\n" +
            "Ob Kundenwunsch oder notwendige Maßnahme, eine Baumfällung setzt professionelles und erfahrenes Fachpersonal voraus. Die jahrzehntelange Erfahrung und die fachspezifische Ausbildung unserer Mitarbeiter sind daher Grundvoraussetzungen für das sichere Fällen von Bäumen. "},
        {title: "Baumpflege", content: "Die Verkehrssicherheit und Gesundheit der Bäume stehen hier im Vordergrund.\n" +
            "Die Baumpflege ist wichtiger Bestandteil in der täglichen Arbeit unseres Teams. Sie trägt durch fachgerechte Rückschnitte, die Entfernung von beschädigten oder abgestorbenen Ästen nicht zur zur gesunden Entwicklung und dem Erhalt des Baumes bei, sondern garantieren auch die Verkehrssicherheit im direkten Umfeld des Baumes für Menschen, Tiere und Gebäude. "}],
      right: [
        {title: "Baumfräsen", content: "Baum fachgerecht gefällt - was nun? \n" +
            "Im Anschluss an eine Baumfällung stellt sich oft die Frage, was mit dem verbliebenen Baumstumpf geschieht. "},
        {title: "Baumkontrolle", content: "DVon außen noch gesund - von innen bereits ein Risiko.\n" +
            "Der Laie erfreut sich an den Vorteilen, die ein Baum mit sich bringt. Er schmückt als Solitär den häuslichen Garten, bietet Schatten an sonnigen Tagen und ist zugleich Lebensraum für Insekten und Vögel."},
        {title: "Jahrespflege im Rahmen der Begutachtung", content: "Gutachten, Kontrolle, Pflege - Rundum abgesichert!\n" +
            "Die Jahrespflege eines Baumbestandes ist der Rundum-Schutz für den stolzen Gartenbesitzer, die Parkanlage auf dem Firmengelände oder die Naherholung direkt hinter der Kurklinik. "}]
    };
    this.romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  }


  ngOnInit(): void {
  }

}
