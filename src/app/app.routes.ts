import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AboutComponent } from './about';
import { ContactsEditorComponent } from './contacts-editor';
import { ContactsDashboardComponent } from './contacts-dashboard';

export const ContactsAppRoutes: Routes = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0' },
      { path: 'contact/:id', component: ContactsDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  }
]
