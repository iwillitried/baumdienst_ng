import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Baumdienst Neuwied';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }
}


/**
 * TODOS:
 * WIP: implement form functionality (sending mails)
 * - Header invert onScroll not on mouseOver
 * - router issues:
 *    + Error Not Found when navigating to sub-page (e.g. .../werte)
 *    + Y-Scroll position should get reset on sub-page but remain on root page
 *    + Header Buttons not working
 *    + Header Buttons don't show current page (maybe not needed?)
 * - sub-pages still look ugly:
 *    + improve font
 *    + padding
 *    + Werte page => padding!
 *    + reseizing breaks image calculation
 * - implement google reviews
 * - implement IG preview
 * - Mobile issues:
 *    + back button looks ugly (remove it?)
 *    + headline fonts don't break / are too big
 */
