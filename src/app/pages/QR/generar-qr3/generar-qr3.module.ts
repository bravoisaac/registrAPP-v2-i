import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarQr3PageRoutingModule } from './generar-qr3-routing.module';

import { GenerarQr3Page } from './generar-qr3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarQr3PageRoutingModule
  ],
  declarations: [GenerarQr3Page]
})
export class GenerarQr3PageModule {}
