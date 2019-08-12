import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  hideMobile = 'hide-mobile';
  path = '../../../../assets/images/custom-menu-icon.png';

  hideMobileOn() {
    const mq = window.matchMedia( '(min-width: 1025px)' );
    if (!mq.matches) {
      this.hideMobile = 'hide-mobile';
      this.path = '../../../../assets/images/custom-menu-icon.png';
    }
  }

  toggleMenu() {
    if (this.hideMobile === 'hide-mobile') {
      this.hideMobile = 'show';
    } else {
      this.hideMobile = 'hide-mobile';
    }
    if (this.path === '../../../../assets/images/custom-menu-icon.png') {
      this.path = '../../../../assets/images/custom-close.png';
    } else {
      this.path = '../../../../assets/images/custom-menu-icon.png';
    }
  }

  WidthChange(mq) {
    if (mq.matches) {
    // window width is at least 1025px
      $('nav').addClass('show');
      $('ul').addClass('show');
      $('i').addClass('show');
    } else {
    // window width is less than 1025px
      $('nav').removeClass('show');
      $('ul').addClass('hide');
      $('i').addClass('hide');
    }
  }

  constructor() { }

  ngOnInit() {
    if (matchMedia) {
      const mq = window.matchMedia('(min-width:1025px)');
      // tslint:disable-next-line: deprecation
      mq.addListener(this.WidthChange);
      this.WidthChange(mq);
    }
  }
}
