import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
  title: string;
  constructor(private _eventBusService: EventBusService, private _titleService: Title) { }

  ngOnInit() {
    this._eventBusService.observe('appTitleChange')
      .subscribe((title) => {
        this.title = title;
        this._titleService.setTitle(this.title);
      }
    );
  }
}
