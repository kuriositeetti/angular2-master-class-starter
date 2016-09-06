import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private _terms$ = new Subject<string>();

  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this._terms$.debounceTime(400)
      .distinctUntilChanged() // Observable<string>
      .switchMap(term => this._contactsService.search(term)) // Obsservable<Contact[]>
      .merge(this._contactsService.getContacts());
  }

}
