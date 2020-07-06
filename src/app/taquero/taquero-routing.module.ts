import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaqueroPage } from './taquero.page';

const routes: Routes = [
  {
    path: '',
    component: TaqueroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaqueroPageRoutingModule {}
