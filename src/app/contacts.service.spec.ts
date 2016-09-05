/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ContactsService } from './contacts.service';

describe('Service: Contacts', () => {
  beforeEach(() => {
    addProviders([ContactsService]);
  });

  it('should ...',
    inject([ContactsService],
      (service: ContactsService) => {
        expect(service).toBeTruthy();
      }));
});
