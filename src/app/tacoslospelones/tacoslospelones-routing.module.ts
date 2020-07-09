import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacoslospelonesPage } from './tacoslospelones.page';

const routes: Routes = [
  {
    path: '',
    component: TacoslospelonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacoslospelonesPageRoutingModule {}
