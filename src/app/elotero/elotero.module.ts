import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EloteroPageRoutingModule } from './elotero-routing.module';

import { EloteroPage } from './elotero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EloteroPageRoutingModule
  ],
  declarations: [EloteroPage]
})
export class EloteroPageModule {}
