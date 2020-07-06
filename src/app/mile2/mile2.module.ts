import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mile2PageRoutingModule } from './mile2-routing.module';

import { Mile2Page } from './mile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mile2PageRoutingModule
  ],
  declarations: [Mile2Page]
})
export class Mile2PageModule {}
