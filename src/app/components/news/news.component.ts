import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/models";
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => this.articles = data)
  }

  sortByDate(articles: Array<Article>): Array<Article> {
    return this.articles.sort((a, b) => {
      const aDate = new Date(a.published_at);
      const bDate = new Date(b.published_at);
      console.log(aDate);
      return aDate.getTime() - bDate.getTime();
    })
  }

}
