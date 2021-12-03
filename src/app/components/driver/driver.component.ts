import {Component, Input, OnInit} from '@angular/core';
import {Driver} from "../../models/models";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  @Input()
  driver: Driver;

  constructor() { }

  ngOnInit(): void {
  }

}
