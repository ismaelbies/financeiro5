import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormaPagamentoRoutingModule } from './forma-pagamento-routing.module';
import { FormaPagamentoPesquisaComponent } from './forma-pagamento-pesquisa/forma-pagamento-pesquisa.component';
import { FormaPagamentoCadastroComponent } from './forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormaPagamentoPesquisaComponent,
    FormaPagamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormaPagamentoRoutingModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ]
})
export class FormaPagamentoModule { }
