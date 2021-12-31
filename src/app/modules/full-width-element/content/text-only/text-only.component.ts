import {Component, Input, OnInit} from '@angular/core';
import {ContentProviderService} from '../../../../services/ContentProvider/content-provider.service';

@Component({
  selector: 'app-text-only',
  templateUrl: './text-only.component.html',
  styleUrls: ['./text-only.component.scss']
})
export class TextOnlyComponent implements OnInit {
  paragraphs: { left: { id: string, title: string, content: string }[], right: { id: string, title: string, content: string }[] } = {
    left: [],
    right: []
  };
  romanNumbers: string[];

  @Input() sectionIDsLeft!: string[];
  @Input() sectionIDsRight!: string[];

  constructor(private contentProvider: ContentProviderService) {
    this.romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  }

  ngOnInit(): void {
    const query = (id: string) => {
      const topic = this.contentProvider.queryTopic(id);
      return {id: topic.id, title: topic.title, content: topic.text[0][0].split(' ').slice(0, 30).join(' ') || ''};
    };
    this.paragraphs.left = this.sectionIDsLeft.map(id => query(id));
    this.paragraphs.right = this.sectionIDsRight.map(id => query(id));
  }

  goToPage(withID: number): void {

  }

}
