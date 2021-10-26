import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ImageAndButtonComponent } from "./content/image-and-button/image-and-button.component";
import { TextAndImageComponent } from "./content/text-and-image/text-and-image.component";
import { TextOnlyComponent } from "./content/text-only/text-only.component";
import { ContactFormComponent } from "./content/contact-form/contact-form.component";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ImageAndButtonComponent,
    TextAndImageComponent,
    TextOnlyComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class FullWidthElementModule { }
