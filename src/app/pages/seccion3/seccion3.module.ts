import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seccion3PageRoutingModule } from './seccion3-routing.module';

import { Seccion3Page } from './seccion3.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seccion3PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Seccion3Page]
})
export class Seccion3PageModule {}
