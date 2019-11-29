import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfofaunaPage } from './infofauna.page';
import { InfofaunaResolver } from './infofauna.resolver';

const routes: Routes = [
  {
    path: '',
    component: InfofaunaPage,
    resolve: {
      data: InfofaunaResolver
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
  declarations: [InfofaunaPage],
  providers: [
    InfofaunaResolver
  ]
})
export class InfofaunaPageModule {}
