import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaCorrenteRoutingModule } from './conta-corrente-routing.module';
import { ContaCorrenteCadastroComponent } from './conta-corrente-cadastro/conta-corrente-cadastro.component';
import { ContaCorrentePesquisaComponent } from './conta-corrente-pesquisa/conta-corrente-pesquisa.component';


@NgModule({
  declarations: [
    ContaCorrenteCadastroComponent,
    ContaCorrentePesquisaComponent,
  ],
  imports: [
    CommonModule,
    ContaCorrenteRoutingModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContaCorrenteModule { }
