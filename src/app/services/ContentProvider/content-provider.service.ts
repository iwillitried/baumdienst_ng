import {Injectable} from '@angular/core';
import topcis from 'src/assets/content/topics.json';
import {Topic} from './topic';

@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {
  public unknownPage: Topic = {
    id: '404',
    title: 'Seite nicht gefunden',
    subtitle: [],
    text: [[]],
    imagePaths: []
  };
  private topicList: Topic[] = topcis;

  constructor() {
  }

  getAllTitles(): void {
    // @ts-ignore
    return topcis.map((t: Topic) => t.title);
  }

  queryTopic(selector: string): Topic {
    return topcis.find((e: Topic) => e.title === selector || e.id === selector) || this.unknownPage;
  }
}
