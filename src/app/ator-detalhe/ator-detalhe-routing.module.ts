import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtorDetalhePage } from './ator-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: AtorDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtorDetalhePageRoutingModule {}
