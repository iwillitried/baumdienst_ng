import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentType} from '../../../modules/full-width-element/enums/contentType.enum';
import {NavigationService} from '../../../services/Navigation/navigation.service';
import {ContentProviderService} from '../../../services/ContentProvider/content-provider.service';
import {Topic} from '../../../services/ContentProvider/topic';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export class TopicPageComponent implements OnInit, AfterViewInit {
  id = '';
  type = ContentType;
  topic: Topic;
  imageSize: number;


  constructor(private route: ActivatedRoute,
              private navigation: NavigationService,
              private contentProvider: ContentProviderService) {
    this.topic = contentProvider.unknownPage;
    this.imageSize = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.topic = this.contentProvider.queryTopic(this.id);

  }

  ngAfterViewInit(): void {
    // debugger;

    const image = document.querySelector('.image-frame>img') as HTMLImageElement;
    image.onload = () => {
      this.imageSize = image.height;
    };
  }


  backButtonPressed(): void {
    this.navigation.back();
  }
}

/* Object structure:
{
    "title": "",
    "subtitle": [],
    "text": [[]],
    "imagePaths": []
  }
*/
