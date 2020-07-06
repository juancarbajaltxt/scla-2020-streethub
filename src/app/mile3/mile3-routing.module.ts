import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mile3Page } from './mile3.page';

const routes: Routes = [
  {
    path: '',
    component: Mile3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mile3PageRoutingModule {}
