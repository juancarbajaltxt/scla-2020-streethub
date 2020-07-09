import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamaleraPageRoutingModule } from './tamalera-routing.module';

import { TamaleraPage } from './tamalera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamaleraPageRoutingModule
  ],
  declarations: [TamaleraPage]
})
export class TamaleraPageModule {}
