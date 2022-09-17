import { Injectable } from '@angular/core';
import {Asset, createClient, Entry} from "contentful";

const CONFIG = {
  space: 'c49ytttuzq07',
  accessToken: 'CEQL5O5LnjwuNZfB7t_q2NLolmDwW-UvnUX0NK3krhg',
}

export interface Driver {
  descriptionText?: string;
  feature?: boolean;
  hardwareText?: string;
  image?: Asset;
  name?: string;
  rolle?: string;
  wohnort?: string;
}

export interface Carousel {
  images?: Array<Asset>
}

export interface Article {
  title?: string;
  image?: Asset;
  body?: string;
}

export interface Home {
  title?: string;
  welcome?: string;
  driver?: string;
  social?: string;
  sponsorText?: string;
}

export interface Social {
  title?: string;
  link?: string;
  channel?: string;
}

export interface Sponsor {
  name?: string;
  logo?: Asset;
  link?: string;
  descriptionText?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getDrivers(query?: object): Promise<Entry<Driver>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'driver'
    }, query))
      .then(res => res.items);
  }

  getCarousel(query?: object): Promise<Entry<Carousel>> {
    return this.cdaClient.getEntry('657p5fGywpg3ovJZWFJh5w', query);
  }

  getArticles(query?: object): Promise<Entry<Article>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'article'
    }, query))
      .then(res => res.items);
  }

  getArticle(id: string, query?: object): Promise<Entry<Article>> {
    return this.cdaClient.getEntry(id, query);
  }

  getHome(query?: object): Promise<Entry<Home>> {
    return this.cdaClient.getEntry('3RPJnYxC8CONPa3UEO484X', query);
  }

  getSocials(query?: object): Promise<Entry<Social>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'social'
    }, query))
      .then(res => res.items);
  }

  getSponsors(query?: object): Promise<Entry<Sponsor>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'sponsor'
    }, query))
      .then(res => res.items);
  }
}
