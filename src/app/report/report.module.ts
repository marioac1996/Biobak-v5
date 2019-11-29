import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportPage } from './report.page';
import { ReportResolver } from './report.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReportPage,
    resolve: {
      data: ReportResolver
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportPage],
  providers: [
    ReportResolver
  ]
})
export class ReportPageModule {}
