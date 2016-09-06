import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  search(term: string) {
    if(term !== '')
      this.contacts = this._contactsService.search(term);
    else
      this.getAllContacts();
  }

  getAllContacts() {
    this.contacts = this._contactsService.getContacts();
  }

}
