import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seccion3Page } from './seccion3.page';

const routes: Routes = [
  {
    path: '',
    component: Seccion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seccion3PageRoutingModule {}
