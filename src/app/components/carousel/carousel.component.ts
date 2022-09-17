import { Component, OnInit } from '@angular/core';
import {Carousel, ContentfulService} from "../../services/contentful.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel: Carousel;

  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.contentful.getCarousel().then(result => this.carousel = result.fields);
  }
}
