import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mile1Page } from './mile1.page';

const routes: Routes = [
  {
    path: '',
    component: Mile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mile1PageRoutingModule {}
