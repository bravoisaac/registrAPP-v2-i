import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarQr2PageRoutingModule } from './generar-qr2-routing.module';

import { GenerarQr2Page } from './generar-qr2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarQr2PageRoutingModule
  ],
  declarations: [GenerarQr2Page]
})
export class GenerarQr2PageModule {}
