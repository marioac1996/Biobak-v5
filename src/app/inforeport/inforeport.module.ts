import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InforeportPage } from './inforeport.page';
import { InforeportResolver } from './inforeport.resolver';

const routes: Routes = [
  {
    path: '',
    component: InforeportPage,
    resolve: {
      data: InforeportResolver
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
  declarations: [InforeportPage],
  providers: [
    InforeportResolver
  ]
})
export class InforeportPageModule {}
