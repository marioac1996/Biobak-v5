import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../services/event.service';

@Injectable()
export class Tab1Resolver implements Resolve<any> {

  constructor(private firebaseService: EventService) {}

  resolve() {
    return this.firebaseService.getTasks();
  }
}
