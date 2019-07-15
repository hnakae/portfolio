import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // object = {
  //   Ohio : {
  //     Columbus : [
  //       'www.google.com'
  //     ]
  //   }
  // };

  // finishedObject = {
  //   Ohio : {
  //     Columbus : [
  //       'www.google.com'
  //     ],
  //     Cleveland : [
  //       'www.abc.com'
  //     ]
  //   }
  // };

  // // anArray: [];
  // Cleveland = [
  //   'www.lol.com'
  // ]

  constructor() { }

  ngOnInit() {
    // this.object['Ohio']['Cleveland'] = this.Cleveland;
    // console.log(this.object);
    // console.log(this.finishedObject);
  }

}
