import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;
  constructor(
    private _route: ActivatedRoute,
    private _contactsService: ContactsService,
    private _router: Router,
    private _eventBusService: EventBusService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._contactsService.getContact(id)
        .subscribe((contact) => {
          this.contact = contact;
          this._eventBusService.emit('appTitleChange', this.contact.name);
        }
      );
    });
  }

  navigateToEditor(contact: Contact) {
    this._router.navigate(['contact', contact.id, 'edit']);
  }

  navigateToList() {
    this._router.navigate(['/']);
  }

}
