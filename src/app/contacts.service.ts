import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {
  apiUrl: string = 'http://localhost:4201/api/';
  private _terms$ = new Subject<string>();
  constructor(private _http: Http) {

  }

  getContacts() {
    return this._http.get(this.apiUrl + 'contacts/')
      .map(response => response.json())
      .map(data => data.items);
  }

  getContact(id: number | string) {
    return this._http.get(this.apiUrl + 'contacts/' + id)
      .map(response => response.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    let url = this.apiUrl + 'contacts/' + contact.id;

    return this._http.put(url, contact);
  }

  rawSearch(term: string) {
    return this._http.get(this.apiUrl + 'search?text=' + term)
      .map(response => response.json())
      .map(data => data.items);
  }

  search(term$: Subject<string>) {
    return term$.debounceTime(400)
    .distinctUntilChanged() // Observable<string>
      .switchMap(term => this.rawSearch(term)); // Obsservable<Contact[]>
  }

}
