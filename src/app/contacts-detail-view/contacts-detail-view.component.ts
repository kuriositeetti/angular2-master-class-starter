import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact:Contact;
  constructor(
    private _route: ActivatedRoute,
    private _contactsService: ContactsService,
    private _router: Router) { }

  ngOnInit() {
    let id = parseInt(this._route.snapshot.params['id']).toString();
    this._contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  navigateToEditor(contact: Contact) {
    this._router.navigate(['contact', contact.id, 'edit']);
  }

  navigateToList() {
    this._router.navigate(['/']);
  }

}
