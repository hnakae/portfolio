import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from 'server/models/email';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // tslint:disable-next-line: variable-name
  _url = 'http://localhost:3000/contact';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  contact(email: Email) {
    return this._http.post<any>(this._url, email);
  }
}
