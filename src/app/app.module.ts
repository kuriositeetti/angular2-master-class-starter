import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ContactsService, EventBusService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
