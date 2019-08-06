import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    // $('form').on('submit', (e) => {
    //   e.preventDefault();

    //   const name = $('#name').val().trim();
    //   const email = $('#email').val().trim();
    //   const message = $('#message').val().trim();

    //   const data = {
    //     name,
    //     email,
    //     message
    //   };

    //   // tslint:disable-next-line: only-arrow-functions
    //   $.post('/contact', data, function() {
    //     console.log('server recieved data');
    //   });
    // });
  }

}
