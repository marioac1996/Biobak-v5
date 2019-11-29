import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventdetailsPage } from './eventdetails.page';
import { EventdetailsResolver } from './eventdetails.resolver';

const routes: Routes = [
  {
    path: '',
    component: EventdetailsPage,
    resolve: {
      data: EventdetailsResolver
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
  declarations: [EventdetailsPage],
  providers:[EventdetailsResolver]
})
export class EventdetailsPageModule {}