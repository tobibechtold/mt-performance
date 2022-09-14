import {Component, Input, OnInit} from '@angular/core';
import { Article } from 'src/app/models/models';
import {ArticlesService} from "../../services/articles.service";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  @Input()
  article: Article;
  @Input()
  fullContent: boolean = false;
  content: string;

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    if (!this.fullContent) {
      this.content = this.getFirstWords(this.article.content);
    } else {
      this.content = this.article.content;
    }
  }

  getFirstWords(text: string): string {
    return text.split(' ').slice(0, 20).join(' ') + '...';
  }

  getDate(date: string): string {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

}
