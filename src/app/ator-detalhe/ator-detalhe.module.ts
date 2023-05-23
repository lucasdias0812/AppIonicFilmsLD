import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtorDetalhePageRoutingModule } from './ator-detalhe-routing.module';

import { AtorDetalhePage } from './ator-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtorDetalhePageRoutingModule
  ],
  declarations: [AtorDetalhePage]
})
export class AtorDetalhePageModule {}
