import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {
  apiUrl: string = 'http://localhost:4201/api/contacts/'
  constructor(private _http: Http) {

  }

  getContacts() {
    return this._http.get(this.apiUrl)
      .map(response => response.json())
      .map(data => data.items);
  }

  getContact(id: number | string) {
    return this._http.get(this.apiUrl + id)
    .map(response => response.json())
    .map(data => data.item);
  }

}
