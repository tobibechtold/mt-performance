import {Component, OnInit} from '@angular/core';
import {ContentfulService, Home} from "./services/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mt-performance';
  home: Entry<Home>;

  constructor(private contentful: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentful.getHome()
      .then(home => this.home = home);
  }
}
