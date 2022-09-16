import { Injectable } from '@angular/core';
import {Asset, createClient, Entry} from "contentful";

const CONFIG = {
  space: 'c49ytttuzq07',
  accessToken: 'CEQL5O5LnjwuNZfB7t_q2NLolmDwW-UvnUX0NK3krhg',
}

export interface Driver2 {
  descriptionText?: string;
  feature?: boolean;
  hardwareText?: string;
  image?: Asset;
  name?: string;
  rolle?: string;
  wohnort?: string;
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

  getDrivers(query?: object): Promise<Entry<Driver2>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'driver'
    }, query))
      .then(res => res.items);
  }
}
