import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { SocialComponent } from './components/social/social.component';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NewsComponent,
    CarouselComponent,
    DriverComponent,
    DriversComponent,
    SponsorComponent,
    SocialComponent,
    MarkdownPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
