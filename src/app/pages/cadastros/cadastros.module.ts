import { ContaCorrenteModule } from './conta-corrente/conta-corrente.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { NgModule } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
  ],
  imports: [
    FormaPagamentoModule,
    ContaCorrenteModule,
    DynamicDialogModule,
    InputMaskModule,
    CurrencyMaskModule
  ],
  providers: [
    DialogService,
    {
      provide: DynamicDialogConfig,
      useValue: {}
    },
    {
      provide: DynamicDialogRef,
      useValue: {}
    },
  ]
})
export class CadastrosModule { }
