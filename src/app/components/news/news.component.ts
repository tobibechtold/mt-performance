import { Component, OnInit } from '@angular/core';
import {Article, ContentfulService} from "../../services/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: Entry<Article>[] = [];

  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.contentful.getArticles()
      .then(result => {
        this.articles = result.sort((a, b) => {
          const aDate = new Date(a.sys.createdAt);
          const bDate = new Date(b.sys.createdAt);
          return bDate.getTime() - aDate.getTime();
        });
      })
  }
}
