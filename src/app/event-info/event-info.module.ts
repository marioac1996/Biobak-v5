import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventInfoPage } from './event-info.page';
import { EventInfoResolver } from './event-info.resolver';

const routes: Routes = [
  {
    path: '',
    component: EventInfoPage,
    resolve: {
      data: EventInfoResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventInfoPage],
  providers: [
    EventInfoResolver
  ]
})
export class EventInfoPageModule {}
