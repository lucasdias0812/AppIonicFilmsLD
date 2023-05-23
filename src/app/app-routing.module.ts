import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filme-detalhe',
    loadChildren: () => import('./filme-detalhe/filme-detalhe.module').then( m => m.FilmeDetalhePageModule)
  },
  {
    path: 'serie-detalhe',
    loadChildren: () => import('./serie-detalhe/serie-detalhe.module').then( m => m.SerieDetalhePageModule)
  },
  {
    path: 'ator-detalhe',
    loadChildren: () => import('./ator-detalhe/ator-detalhe.module').then( m => m.AtorDetalhePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
