import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models/models";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from 'src/app/services/articles.service';
import {SeoService} from "../../services/seo.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {

  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService, private seoService: SeoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id).subscribe(article => {
      this.article = article;
      this.seoService.updateTitle(this.article.title + ' - MT Performance eSport');
      this.seoService.updateMetaTags([
        {property: 'og:title', content: this.article.title},
        {property: 'og:image', content: 'https://strapi-l8cn-f0jv.onrender.com' + this.article.image.url},
        {property: 'og:url', content: 'https://www.mt-performance-esport.de/news/' + this.article.id},
      ]);
    });
  }
}
