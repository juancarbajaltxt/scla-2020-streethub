import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamaleraPage } from './tamalera.page';

const routes: Routes = [
  {
    path: '',
    component: TamaleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamaleraPageRoutingModule {}
