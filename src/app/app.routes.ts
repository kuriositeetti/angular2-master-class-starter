import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsEditorComponent } from './contacts-editor';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent }
]
