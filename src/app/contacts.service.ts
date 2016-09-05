import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts():Contact[] {
    return CONTACT_DATA;
  }

  getContact(id: number | string):Contact {
    return CONTACT_DATA.find(contact => contact.id == id);
  }

}
