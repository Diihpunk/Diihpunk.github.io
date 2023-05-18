import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent implements OnInit {
  title = 'owl-carousel';



  slidesStore = [ 
    { id: 1, src: '/assets/images/icon-list/git_alt_icon.png', alt: 'Slide 1', title: 'Slide 1' },
    { id: 2, src: '/assets/images/icon-list/html5_icon.png', alt: 'Slide 1', title: 'Slide 2' },
    { id: 3, src: '/assets/images/icon-list/css3_icon.png', alt: 'Slide 1', title: 'Slide 3' },
    { id: 4, src: '/assets/images/icon-list/sass_icon.png', alt: 'Slide 1', title: 'Slide 4' },
    { id: 5, src: '/assets/images/icon-list/js_icon.png', alt: 'Slide 1', title: 'Slide 5' },
    { id: 6, src: '/assets/images/icon-list/typescript_icon.png', alt: 'Slide 1', title: 'Slide 6' },
    { id: 7, src: '/assets/images/icon-list/angular_icon.png', alt: 'Slide 1', title: 'Slide 7' },
    { id: 8, src: '/assets/images/icon-list/react_icon.png', alt: 'Slide 1', title: 'Slide 8' },
    { id: 9, src: '/assets/images/icon-list/vue_icon.png', alt: 'Slide 1', title: 'Slide 9' },
    { id: 10, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 10' }
  ]
  // slidesStore = [ 
  //   { id: 1, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 1' },
  //   { id: 2, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 2' },
  //   { id: 3, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 3' },
  //   { id: 4, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 4' },
  //   { id: 5, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 5' },
  //   { id: 6, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 6' },
  //   { id: 7, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 7' },
  //   { id: 8, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 8' },
  //   { id: 9, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 9' },
  //   { id: 10, src: '/assets/images/icon-list/tailwind_icon.png', alt: 'Slide 1', title: 'Slide 10' }
  // ]




  // customOptions={items: 5, dots: true, nav: true};

   customOptions: OwlOptions = {
     loop: true,
     mouseDrag: false,
     touchDrag: false,
     pullDrag: false,
     dots: true,
     navSpeed: 700,
     nav: false,
     responsive: {
      0: {
        items: 4
      },
      400: {
        items: 2
      },
      600: {
        items: 5
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      },
      1200: {
        items: 6
      },
      1400: {
        items: 7
      },
      1600: {
        items: 8
      },
      1800: {
        items: 9
      },
      2000: {
        items: 5
      }
    }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
