import {Component, Input, OnInit} from '@angular/core';
import {HomepageService} from "../../services/homepage.service";
import {HomepageData} from "../../models/models";
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homepageData: HomepageData;

  constructor(public homepageService: HomepageService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('MT-Performance eSport')
    this.seoService.updateMetaTags([
      {property: 'og:title', content: 'MT-Performance eSport'},
      {property: 'og:url', content: 'https://www.mt-performance-esport.de/'}
    ]);
    this.homepageService.homepageData().subscribe(data => {
      this.homepageData = data;
    });
  }

}
