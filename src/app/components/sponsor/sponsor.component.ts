import {Component, OnInit} from '@angular/core';
import {ContentfulService, Sponsor} from "../../services/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sponsors: Array<Entry<Sponsor>> = [];

  constructor(private contentful: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentful.getSponsors()
      .then(result => this.sponsors = result);
  }

}
