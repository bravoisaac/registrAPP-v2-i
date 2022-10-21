import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seccion2Page } from './seccion2.page';

const routes: Routes = [
  {
    path: '',
    component: Seccion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seccion2PageRoutingModule {}
