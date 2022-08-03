import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { CartaoCreditoRoutingModule } from './cartao-credito-routing.module';
import { CartaoCreditoPesquisaComponent } from './cartao-credito-pesquisa/cartao-credito-pesquisa.component';
import { CartaoCreditoCadastroComponent } from './cartao-credito-cadastro/cartao-credito-cadastro.component';


@NgModule({
  declarations: [
    CartaoCreditoPesquisaComponent,
    CartaoCreditoCadastroComponent
  ],
  imports: [
    CommonModule,
    CartaoCreditoRoutingModule,
    TableModule
  ]
})
export class CartaoCreditoModule { }
