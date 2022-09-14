import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models/models";
import {ActivatedRoute} from "@angular/router";
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }

}
