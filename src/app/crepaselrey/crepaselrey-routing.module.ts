import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepaselreyPage } from './crepaselrey.page';

const routes: Routes = [
  {
    path: '',
    component: CrepaselreyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepaselreyPageRoutingModule {}
