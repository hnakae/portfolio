import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  hideMobile = 'hide-mobile';
  public open = '';
  path = '../../../../assets/images/custom-menu-icon.png';

  status = false;


  myfunction() {
    // hideMobile 
    if (this.hideMobile === 'hide-mobile') {
      this.hideMobile = '';
    } else {
      this.hideMobile = 'hide-mobile';
    }

    if (this.path === '../../../../assets/images/custom-menu-icon.png') {
      this.path = '../../../../assets/images/custom-close.png';
    } else {
      this.path = '../../../../assets/images/custom-menu-icon.png';
    }

    if (this.open === 'open') {
      this.open = '';
    } else {
      this.open = 'open';
    }


    this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {

  }

}
