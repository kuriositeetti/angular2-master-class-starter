import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();
  private _saved: boolean = false;

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }

  save() {
    return true;
  }
}

export class EventBusArgs {
  type: string;
  data: any;
}
