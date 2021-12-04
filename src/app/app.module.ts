import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NewsComponent,
    CarouselComponent,
    DriverComponent,
    DriversComponent,
    SponsorComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
