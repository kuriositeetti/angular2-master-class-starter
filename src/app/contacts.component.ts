import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
  contacts: Contact[];

  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }
}
