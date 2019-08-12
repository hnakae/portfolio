import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).on('swipeleft swiperight', function(event) {
      if (event.type === 'swiperight') {
        const prevpage = '#' + $.mobile.activePage.prev('div[data-role="page"]')[0].id;
        if (prevpage === '#home' || prevpage === '#blog' || prevpage === '#videos') {
          $.mobile.changePage(prevpage, {
            transition: 'slide',
            reverse: true
          });
        }
      }
      if (event.type === 'swipeleft') {
        const nextpage = '#' + $.mobile.activePage.next('div[data-role="page"]')[0].id;
        if ( nextpage === '#videos' || nextpage === '#photos') {
          $.mobile.changePage(nextpage, {
            transition: 'slide',
            reverse: false
          });
        }
      }
    });
  }
}
