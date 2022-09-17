import { Component, OnInit } from '@angular/core';
import {SocialService} from "../../services/social.service";
import {Social} from "../../models/models";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socials: Array<Social> = [];

  constructor(private socialService: SocialService) { }

  ngOnInit(): void {
    this.socialService.getSocials().subscribe(data => this.socials = data);
  }

}
