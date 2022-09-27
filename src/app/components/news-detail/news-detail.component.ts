import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../../services/seo.service";
import {Article, ContentfulService} from 'src/app/services/contentful.service';
import {Entry} from "contentful";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  article: Entry<Article>;
  error: boolean = false;
  loading: boolean = true;

  constructor(@Inject(DOCUMENT) private dom: any, private route: ActivatedRoute, private seoService: SeoService, private contentful: ContentfulService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`)

    this.contentful.getArticle(id)
      .subscribe(article => {
        this.article = article.items.filter((item: any) => item.sys.id.toLowerCase() === id.toLowerCase())[0];
        if (!this.article) {
          this.error = true;
          this.loading = false;
          return;
        }
        this.article.fields.image = article.includes.Asset.filter((item: any) => item.sys.id === this.article.fields.image.sys.id)[0];
        this.seoService.updateTitle(this.article.fields.title + ' - MT Performance eSport');
        if (element) {
          element.setAttribute('rel','canonical');
          element.setAttribute('href', 'https://www.mt-performance-esport.de/news/' + this.article.sys.id);
        }

        this.seoService.updateMetaTags([
          {property: 'og:title', content: this.article.fields.title},
          {
            property: 'og:image',
            content: this.article.fields.image.fields.file.url + '?fm=webp&w=600'
          },
          {property: 'og:url', content: 'https://www.mt-performance-esport.de/news/' + this.article.sys.id},
        ]);
        this.loading = false;
      }, error => {
        this.error = true;
        this.loading = false;
      });
  }
}
