import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../../services/seo.service";
import {Article, ContentfulService} from 'src/app/services/contentful.service';
import {Entry} from "contentful";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  article: Entry<Article>;

  constructor(private route: ActivatedRoute, private seoService: SeoService, private contentful: ContentfulService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.contentful.getArticle(id)
      .subscribe(article => {
        this.article = article.items.filter((item: any) => item.sys.id === id)[0];
        this.article.fields.image = article.includes.Asset.filter((item: any) => item.sys.id === this.article.fields.image.sys.id)[0];
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
