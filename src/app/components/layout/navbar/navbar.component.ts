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
  mode = 'desktop' || 'mobile';

  hideMobileOn() {
    const mq = window.matchMedia( '(min-width: 1025px)' );
    if (mq.matches) {
      this.hideMobile = '';
    } else {
      this.hideMobile = 'hide-mobile';
    }
    // this.hideMobile = 'hide-mobile';
    this.path = '../../../../assets/images/custom-menu-icon.png';
  }

  // showDesktop() {
  //   this.hideMobile = '';
  //   this.mode = 'desktop';
  // }

  toggleMenu() {
    if (this.hideMobile === 'hide-mobile') {
      this.hideMobile = '';
      this.mode = 'mobile';
    } else {
      this.hideMobile = 'hide-mobile';
      this.mode = 'desktop';
    }
    if (this.path === '../../../../assets/images/custom-menu-icon.png' && this.mode === 'mobile') {
      this.path = '../../../../assets/images/custom-close.png';
    } else {
      this.path = '../../../../assets/images/custom-menu-icon.png';
    }

  }

  WidthChange(mq) {
    if (mq.matches) {// window width is at least 1025px

    
      // $('nav').addClass('show');
      $('nav').addClass('show');
      // $('nav').removeClass('hide');
      // $('ul').addClass('show');
      $('ul').addClass('show');
      // $('ul').removeClass('hide');
      // $('i').addClass('show');
      $('i').addClass('show');
      // $('i').removeClass('hide');
      // if (this.hideMobile === '') {
      //   this.toggleMenu();
      // }
      
    } else {// window width is less than 1025px
      
      // nav links invisible
      $('nav').removeClass('show');
      $('nav').addClass('hide');
      // $('nav').addClass('hide');
      // // $('nav').toggleClass('show');
      // $('ul').removeClass('show');
      $('ul').addClass('hide');
      // $('ul').addClass('hide');
      // $('i').removeClass('show');
      $('i').addClass('hide');
      // $('i').addClass('hide');
      // if (this.hideMobile === '') {
      //   this.toggleMenu();
      // }
    }
  }

  constructor() { }

  ngOnInit() {
    if (matchMedia) {
      const mq = window.matchMedia('(min-width:1025px)');
      if (mq.matches) {
        this.hideMobile = '';
      }
      // const mq2 = window.matchMedia('(max-width:1024px)');
      // if (mq2.matches) {
      //   this.hideMobile = 'hide-mobile';
      // }
      // tslint:disable-next-line: deprecation
      mq.addListener(this.WidthChange);
      this.WidthChange(mq);
    }
  }
}
