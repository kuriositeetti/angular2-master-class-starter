import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};

  constructor(
    private _route: ActivatedRoute,
    private _contactsService: ContactsService,
    private _router: Router,
    private _eventBusService: EventBusService) { }


  ngOnInit() {
    let id = parseInt(this._route.snapshot.params['id']).toString();
    this._contactsService.getContact(id)
      .subscribe((contact) => {
        this.contact = contact;
        this._eventBusService.emit('appTitleChange', 'Editing: ' + this.contact.name);
      }
    );
  }

  save(contact: Contact) {
    this._contactsService.updateContact(contact)
      .subscribe(response => { this._router.navigate(['/contact/' + contact.id]);});
  }

  cancel(contact: Contact) {
    this._router.navigate(['/contact/' + contact.id]);
  }

}
