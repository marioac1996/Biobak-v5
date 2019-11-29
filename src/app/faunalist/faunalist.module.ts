import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { IonicModule } from '@ionic/angular';
import { FaunalistResolver } from './faunalist.resolver';
import { FaunalistPage } from './faunalist.page';


const routes: Routes = [
  {
    path: '',
    component: FaunalistPage,
    resolve: {
      data: FaunalistResolver,
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
  declarations: [FaunalistPage],
  providers: [
    FaunalistResolver
  ]
})
export class FaunalistPageModule {}




