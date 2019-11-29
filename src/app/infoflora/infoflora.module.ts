import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfofloraPage } from './infoflora.page';
import { InfofloraResolver } from './infoflora.resolver';

const routes: Routes = [
  {
    path: '',
    component: InfofloraPage,
    resolve: {
      data: InfofloraResolver
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
  declarations: [InfofloraPage],
  providers: [
    InfofloraResolver
  ]
})
export class InfofloraPageModule {}
