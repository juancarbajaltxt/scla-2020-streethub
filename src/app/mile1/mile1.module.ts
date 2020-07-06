import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mile1PageRoutingModule } from './mile1-routing.module';

import { Mile1Page } from './mile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mile1PageRoutingModule
  ],
  declarations: [Mile1Page]
})
export class Mile1PageModule {}
