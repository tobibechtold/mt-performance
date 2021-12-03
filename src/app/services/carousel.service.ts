import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article, Carousel, Image} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<Carousel> {
    return this.httpClient.get<Carousel>('https://strapi-l8cn-f0jv.onrender.com/carousel');
  }

}
