import {Component, OnInit} from '@angular/core';
import {HomepageService } from './services/homepage.service';
import {HomepageData} from "./models/models";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/operators";
import {SeoService} from "./services/seo.service";
import {ArticlesService} from "./services/articles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mt-performance';
  homepageData: HomepageData;

  constructor(private homepageService: HomepageService, private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService, private articleService: ArticlesService) {
  }

  ngOnInit(): void {
    this.homepageService.homepageData().subscribe(data => {
      this.homepageData = data;
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
    ).subscribe(route => {
      if (route.snapshot.paramMap.has('id')) {
        const id = Number(route.snapshot.paramMap.get('id'));
        this.articleService.getArticle(id).subscribe(article => {
          this.seoService.updateTitle(article.title);
          this.seoService.updateMetaTags([
              {property: 'og:title', content: article.title},
              {property: 'og:image', content: 'https://strapi-l8cn-f0jv.onrender.com' + article.image.url},
              {property: 'og:url', content: 'https://www.mt-performance-esport.de/#/news/' + article.id}
            ]
          );
        });
      }
    });
  }
}
