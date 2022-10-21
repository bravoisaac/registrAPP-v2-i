import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarQr2Page } from './generar-qr2.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarQr2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarQr2PageRoutingModule {}
