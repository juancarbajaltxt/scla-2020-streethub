import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'mile2',
    loadChildren: () => import('./mile2/mile2.module').then( m => m.Mile2PageModule)
  },
  {
    path: 'mile3',
    loadChildren: () => import('./mile3/mile3.module').then( m => m.Mile3PageModule)
  },
  {
    path: 'taquero',
    loadChildren: () => import('./taquero/taquero.module').then( m => m.TaqueroPageModule)
  },
  {
    path: 'crepaselrey',
    loadChildren: () => import('./crepaselrey/crepaselrey.module').then( m => m.CrepaselreyPageModule)
  },
  {
    path: 'tacoslospelones',
    loadChildren: () => import('./tacoslospelones/tacoslospelones.module').then( m => m.TacoslospelonesPageModule)
  },
  {
    path: 'elotero',
    loadChildren: () => import('./elotero/elotero.module').then( m => m.EloteroPageModule)
  },
  {
    path: 'tamalera',
    loadChildren: () => import('./tamalera/tamalera.module').then( m => m.TamaleraPageModule)
  },
  {
    path: 'churros',
    loadChildren: () => import('./churros/churros.module').then( m => m.ChurrosPageModule)
  },
  {
    path: 'fruitstand',
    loadChildren: () => import('./fruitstand/fruitstand.module').then( m => m.FruitstandPageModule)
  },
  {
    path: 'tacoselmazapan',
    loadChildren: () => import('./tacoselmazapan/tacoselmazapan.module').then( m => m.TacoselmazapanPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
