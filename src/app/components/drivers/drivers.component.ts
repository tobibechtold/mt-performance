import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../services/driver.service";
import {Driver} from "../../models/models";
import {ContentfulService, Driver2} from 'src/app/services/contentful.service';
import {Entry} from "contentful";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Array<Driver>;
  drivers2: Array<Entry<Driver2>>

  constructor(private driverService: DriverService, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(drivers => this.drivers = drivers.sort((a, b) => {
      return (a.feature === b.feature)? 0 : a.feature? -1 : 1;
    }));

    this.contentfulService.getDrivers().then((drivers) => {
      console.log(drivers)
      this.drivers2 = drivers;
    });
  }

}
