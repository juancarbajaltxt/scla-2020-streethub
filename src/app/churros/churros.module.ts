import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurrosPageRoutingModule } from './churros-routing.module';

import { ChurrosPage } from './churros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChurrosPageRoutingModule
  ],
  declarations: [ChurrosPage]
})
export class ChurrosPageModule {}
