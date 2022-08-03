import { ContaCorrenteModule } from './conta-corrente/conta-corrente.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { NgModule } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
  ],
  imports: [
    FormaPagamentoModule,
    ContaCorrenteModule,
    DynamicDialogModule,
    InputMaskModule
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
