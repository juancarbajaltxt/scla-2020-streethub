import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacoslospelonesPageRoutingModule } from './tacoslospelones-routing.module';

import { TacoslospelonesPage } from './tacoslospelones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacoslospelonesPageRoutingModule
  ],
  declarations: [TacoslospelonesPage]
})
export class TacoslospelonesPageModule {}
