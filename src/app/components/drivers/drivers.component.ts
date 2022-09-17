import { Component, OnInit } from '@angular/core';
import {ContentfulService, Driver} from 'src/app/services/contentful.service';
import {Entry} from "contentful";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Array<Entry<Driver>>

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getDrivers().then((drivers) => {
      this.drivers = drivers.sort((a, b) => {
        return (a.fields.feature === b.fields.feature)? 0 : a.fields.feature? -1 : 1;
      });
    });
  }
}
