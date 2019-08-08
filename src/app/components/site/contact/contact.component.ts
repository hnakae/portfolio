import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
import { Email } from '../../../../../server/models/email';
import { ContactService } from '../../../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailModel = new Email('', '', '');

  submitted = false;

  // tslint:disable-next-line: variable-name
  constructor(private _contactService: ContactService) { }

  onSubmit() {
    this.submitted = true;
    this._contactService.contact(this.emailModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
  }

  ngOnInit() { }

}
