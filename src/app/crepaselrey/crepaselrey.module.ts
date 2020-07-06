import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrepaselreyPageRoutingModule } from './crepaselrey-routing.module';

import { CrepaselreyPage } from './crepaselrey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrepaselreyPageRoutingModule
  ],
  declarations: [CrepaselreyPage]
})
export class CrepaselreyPageModule {}
