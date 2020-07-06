import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mile1',
    loadChildren: () => import('./mile1/mile1.module').then( m => m.Mile1PageModule)
  },
  {
    path: 'mile2',
    loadChildren: () => import('./mile2/mile2.module').then( m => m.Mile2PageModule)
  },
  {
    path: 'mile3',
    loadChildren: () => import('./mile3/mile3.module').then( m => m.Mile3PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
