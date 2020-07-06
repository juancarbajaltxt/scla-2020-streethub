import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mile2Page } from './mile2.page';

const routes: Routes = [
  {
    path: '',
    component: Mile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mile2PageRoutingModule {}
