import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService, Social} from "../../services/contentful.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socials: Array<Entry<Social>> = [];

  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.contentful.getSocials()
      .then(result => this.socials = result);
  }

}
