import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FaunaService } from '../services/fauna.service';

@Injectable()
export class FaunaResolver implements Resolve<any> {

  constructor(private firebaseService: FaunaService) {}

  resolve() {
    return this.firebaseService.getTasks();
  }
}
