import { Component, OnInit } from '@angular/core';
import {DriverService} from "../../services/driver.service";
import {Driver} from "../../models/models";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Array<Driver>;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(drivers => this.drivers = drivers.sort((a, b) => {
      return (a.feature === b.feature)? 0 : a.feature? -1 : 1;
    }));
  }

}
