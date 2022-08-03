import { ContaCorrenteModule } from './conta-corrente/conta-corrente.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    FormaPagamentoModule,
    ContaCorrenteModule,
  ]
})
export class CadastrosModule { }
