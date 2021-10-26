import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullWidthElementModule } from "./components/full-width-element/full-width-element.module";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullWidthElementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
