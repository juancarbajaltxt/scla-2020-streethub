import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitstandPage } from './fruitstand.page';

const routes: Routes = [
  {
    path: '',
    component: FruitstandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitstandPageRoutingModule {}
