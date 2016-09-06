import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _eventBusService: EventBusService) { }

  ngOnInit() {
    this._eventBusService.emit('appTitleChange', 'About');
  }

}
