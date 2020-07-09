import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitstandPageRoutingModule } from './fruitstand-routing.module';

import { FruitstandPage } from './fruitstand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitstandPageRoutingModule
  ],
  declarations: [FruitstandPage]
})
export class FruitstandPageModule {}
