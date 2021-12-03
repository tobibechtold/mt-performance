import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sponsor} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private httpClient: HttpClient) { }

  getSponsors(): Observable<Array<Sponsor>> {
    return this.httpClient.get<Array<Sponsor>>('https://strapi-l8cn-f0jv.onrender.com/sponsors');
  }
}
