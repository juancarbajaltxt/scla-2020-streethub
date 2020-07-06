import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mile3PageRoutingModule } from './mile3-routing.module';

import { Mile3Page } from './mile3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mile3PageRoutingModule
  ],
  declarations: [Mile3Page]
})
export class Mile3PageModule {}
