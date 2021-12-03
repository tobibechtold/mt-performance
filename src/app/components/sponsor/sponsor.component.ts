import {Component, OnInit} from '@angular/core';
import {SponsorService} from 'src/app/services/sponsor.service';
import {Sponsor} from "../../models/models";

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sponsors: Array<Sponsor> = [];

  constructor(private sponsorService: SponsorService) {
  }

  ngOnInit(): void {
    this.sponsorService.getSponsors().subscribe(data => this.sponsors = data);
  }

}
