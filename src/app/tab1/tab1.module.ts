import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { Tab1Resolver } from './tab1.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve: {
      data: Tab1Resolver
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
  declarations: [Tab1Page],
  providers: [
    Tab1Resolver
  ]
})
export class Tab1PageModule {}