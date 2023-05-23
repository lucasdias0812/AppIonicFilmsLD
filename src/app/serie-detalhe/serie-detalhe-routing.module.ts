import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieDetalhePage } from './serie-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: SerieDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieDetalhePageRoutingModule {}
