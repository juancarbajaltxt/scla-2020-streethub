import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EloteroPage } from './elotero.page';

const routes: Routes = [
  {
    path: '',
    component: EloteroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EloteroPageRoutingModule {}
