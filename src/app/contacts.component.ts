import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
  title: string;
  constructor(private _eventBusService: EventBusService) { }

  ngOnInit() {
    this._eventBusService.observe('appTitleChange')
      .subscribe((title) => {
        this.title = title;
      }
    );
  }
}
