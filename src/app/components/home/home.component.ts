import {Component, Input, OnInit} from '@angular/core';
import {HomepageService} from "../../services/homepage.service";
import {HomepageData} from "../../models/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homepageData: HomepageData;

  constructor(public homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.homepageData().subscribe(data => {
      this.homepageData = data;
    });
  }

}
