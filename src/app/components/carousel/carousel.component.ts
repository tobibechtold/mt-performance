import { Component, OnInit } from '@angular/core';
import {Article, Image} from "../../models/models";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: Image[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getImages().subscribe(data => this.images = data.images);
  }

  prependUrl(image: Image): string {
    return 'https://strapi-l8cn-f0jv.onrender.com' + image.url;
  }

}
