import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Article, Image} from "../models/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>('https://strapi-l8cn-f0jv.onrender.com/articles');
  }

  getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article>('https://strapi-l8cn-f0jv.onrender.com/articles/' + id);
  }
}
