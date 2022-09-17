import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../services/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  @Input() article: Entry<Article>;
  @Input() fullContent: boolean = false;
  content: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.fullContent) {
      this.content = this.getFirstWords(this.article.fields.body);
    } else {
      this.content = this.article.fields.body;
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
