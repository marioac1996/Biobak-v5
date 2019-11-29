import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Details2Page } from './details2.page';
import { Details2Resolver } from './details2.resolver';

const routes: Routes = [
  {
    path: '',
    component: Details2Page,
    resolve: {
      data: Details2Resolver
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
  declarations: [Details2Page],
  providers:[Details2Resolver]
})
export class Details2PageModule {}
