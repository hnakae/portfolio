import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  hideMobile = 'hide-mobile';
  path = '../../../../assets/images/custom-menu-icon.png';
  


  hideMobileOn() {
    this.hideMobile = 'hide-mobile';
    this.path = '../../../../assets/images/custom-menu-icon.png';
  }

  toggleMenu() {
    // toggle
    if (this.hideMobile === 'hide-mobile') {
      this.hideMobile = '';
    } else {
      this.hideMobile = 'hide-mobile';
    }

    // menu || close : img
    if (this.path === '../../../../assets/images/custom-menu-icon.png') {
      this.path = '../../../../assets/images/custom-close.png';
    } else {
      this.path = '../../../../assets/images/custom-menu-icon.png';
    }

  }

  constructor() { }

  ngOnInit() {
    const mq = window.matchMedia( '(min-width: 1025px)' );
    if (mq.matches) {
      this.hideMobile = '';
      if (this.hideMobile === 'hide-mobile') {
        this.hideMobile = '';
      }
    } else {
      this.hideMobile = 'hide-mobile';
    }
  }

}
