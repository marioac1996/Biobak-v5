import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FloraPage } from './flora.page';
import { FloraResolver } from './flora.resolver';

const routes: Routes = [
  {
    path: '',
    component: FloraPage,
    resolve: {
      data: FloraResolver,
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
  declarations: [FloraPage],
  providers: [
    FloraResolver
  ]
})
export class FloraPageModule {}
