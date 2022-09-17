import {Component, Input, OnInit} from '@angular/core';
import {Driver} from "../../services/contentful.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  @Input() driver: Driver;

  constructor() { }
}
