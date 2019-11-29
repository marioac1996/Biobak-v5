import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaunaPage } from './fauna.page';
import { FaunaResolver } from './fauna.resolver';

const routes: Routes = [
  {
    path: '',
    component: FaunaPage,
    resolve: {
      data: FaunaResolver
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
  declarations: [FaunaPage],
  providers: [
    FaunaResolver
  ]
})
export class FaunaPageModule {}
