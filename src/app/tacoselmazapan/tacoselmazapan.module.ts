import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacoselmazapanPageRoutingModule } from './tacoselmazapan-routing.module';

import { TacoselmazapanPage } from './tacoselmazapan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacoselmazapanPageRoutingModule
  ],
  declarations: [TacoselmazapanPage]
})
export class TacoselmazapanPageModule {}
