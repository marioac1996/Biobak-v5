import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ReportService } from '../services/report.service';

@Injectable()
export class ReportResolver implements Resolve<any> {

  constructor(private firebaseService: ReportService) {}

  resolve() {
    return this.firebaseService.getTasks();
  }
}
