import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Carousel, Driver} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }

  getDrivers(): Observable<Array<Driver>> {
    return this.httpClient.get<Array<Driver>>('https://strapi-l8cn-f0jv.onrender.com/drivers');
  }
}
