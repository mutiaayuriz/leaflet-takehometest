import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HttpClient,
} from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MapComponent } from "./home/map/map.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [],
  providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
