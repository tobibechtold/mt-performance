import {Component, Input, OnInit} from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import {ContentfulService, Home} from 'src/app/services/contentful.service';
import {Entry} from "contentful";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: Entry<Home>;

  constructor(private seoService: SeoService, private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('MT-Performance eSport')
    this.seoService.updateMetaTags([
      {property: 'og:title', content: 'MT-Performance eSport'},
      {property: 'og:url', content: 'https://www.mt-performance-esport.de/'}
    ]);
    this.contentful.getHome()
      .then(home => this.home = home)
  }

}
