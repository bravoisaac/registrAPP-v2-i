import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarQr3Page } from './generar-qr3.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarQr3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarQr3PageRoutingModule {}
