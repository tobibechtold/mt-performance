import {Component, OnInit} from '@angular/core';
import {HomepageService } from './services/homepage.service';
import {HomepageData} from "./models/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mt-performance';
  homepageData: HomepageData;

  constructor(private homepageService: HomepageService, private router: Router) {
  }

  ngOnInit(): void {
    this.homepageService.homepageData().subscribe(data => {
      this.homepageData = data;
    });
  }

  scrollTo(anchor: string) {
    this.router.navigate([], { fragment: anchor });
  }

}
