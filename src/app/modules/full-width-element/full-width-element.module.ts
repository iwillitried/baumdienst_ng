import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/site-header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ImageAndButtonComponent} from './content/image-and-button/image-and-button.component';
import {TextAndImageComponent} from './content/text-and-image/text-and-image.component';
import {TextOnlyComponent} from './content/text-only/text-only.component';
import {ContactFormComponent} from './content/contact-form/contact-form.component';
import {DirectivesModule} from '../directives/directives.module';
import {RouterModule} from '@angular/router';
import {ContentHeaderComponent} from './header/content-header/content-header/content-header.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ImageAndButtonComponent,
    TextAndImageComponent,
    TextOnlyComponent,
    ContactFormComponent,
    ContentHeaderComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContentHeaderComponent
  ]
})
export class FullWidthElementModule {

}
