import { Tab2Page } from './tab2.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2Resolver } from './tab2.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    resolve: {
      data: Tab2Resolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  providers: [
    Tab2Resolver
  ]
})
export class Tab2PageModule {}
