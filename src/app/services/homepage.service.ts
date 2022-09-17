import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomepageData} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private httpClient: HttpClient) {
  }

  homepageData(): Observable<HomepageData> {
    return this.httpClient.get<HomepageData>('https://strapi-l8cn-f0jv.onrender.com/home');
  }
}
