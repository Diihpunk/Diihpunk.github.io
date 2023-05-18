import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuToggle: HTMLElement | null;
  mobileMenu: HTMLElement | null;


  constructor() {
    this.menuToggle = null;
    this.mobileMenu = null;
  }

  ngOnInit(): void {

  }
  menuMobile(){
    this.menuToggle = document.getElementById('menu-toggle');
    this.mobileMenu = document.getElementById('mobile-menu');

    if (this.menuToggle && this.mobileMenu) {

        this.mobileMenu!.classList.toggle('hidden');

    }
  }


}