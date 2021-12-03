import {Component, Input, OnInit} from '@angular/core';
import { Article } from 'src/app/models/models';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  @Input()
  article: Article;
  content: string;
  showMoreToggle: boolean;
  constructor() { }

  ngOnInit(): void {
    this.content = this.getFirstWords(this.article.content);
  }

  getFirstWords(text: string): string {
    return text.split(' ').slice(0, 20).join(' ') + '...';
  }

  showMore() {
    if (this.showMoreToggle) {
      this.content = this.getFirstWords(this.article.content);
    } else {
      this.content = this.article.content;
    }

    this.showMoreToggle = !this.showMoreToggle;
  }

}
