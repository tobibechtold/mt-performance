import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Social} from "../models/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private httpClient: HttpClient) { }

  getSocials(): Observable<Array<Social>> {
    return this.httpClient
      .get<Array<Social>>('https://strapi-l8cn-f0jv.onrender.com/socials');
  }
}
