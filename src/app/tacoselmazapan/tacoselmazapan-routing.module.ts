import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacoselmazapanPage } from './tacoselmazapan.page';

const routes: Routes = [
  {
    path: '',
    component: TacoselmazapanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacoselmazapanPageRoutingModule {}
