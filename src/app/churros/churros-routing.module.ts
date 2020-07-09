import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurrosPage } from './churros.page';

const routes: Routes = [
  {
    path: '',
    component: ChurrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurrosPageRoutingModule {}
