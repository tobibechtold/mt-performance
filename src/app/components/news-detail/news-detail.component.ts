import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../../services/seo.service";
import {Article, ContentfulService} from 'src/app/services/contentful.service';
import {Entry} from "contentful";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {

  article: Entry<Article>;

  constructor(private route: ActivatedRoute, private seoService: SeoService, private contentful: ContentfulService) {
    const id = this.route.snapshot.paramMap.get('id');

    this.contentful.getArticle(id)
      .then(article => {
        this.article = article;
        this.seoService.updateTitle(this.article.fields.title + ' - MT Performance eSport');
        this.seoService.updateMetaTags([
          {property: 'og:title', content: this.article.fields.title},
          {
            property: 'og:image',
            content: this.article.fields.image.fields.file.url + '?fm=webp&w=600'
          },
          {property: 'og:url', content: 'https://www.mt-performance-esport.de/news/' + this.article.sys.id},
        ]);
      });
  }
}
