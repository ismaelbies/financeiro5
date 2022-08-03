import { FormaPagamentoService } from './../../service/forma-pagamento/forma-pagamento.service';
import { FormaPagamento } from './../../models/forma-pagamento';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit{

  @Input() display = false;
  @Input() formaPagamentoJson!: FormaPagamento;
  @Output() aoSalvar = new EventEmitter();
  public formaPagamentoArray: FormaPagamento[] = [];
  public idFormaPagamento: number | undefined  = 0;
  public descricao: string = "";
  public status: string = "ativo";
  public tipo: string = "Nenhum";
  title = "Inserir Forma de Pagamento";
  public formaPagamento = {} as any;

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
  }


  toggle(id: number) {
    this.display = !this.display;
    if(!this.display) {
      this.idFormaPagamento = 0;
      this.limparCampos();
    }
  }

  close() {
    this.display = false;
  }

  transferir($event: any) {
      this.formaPagamentoJson = $event.array;
      this.descricao = this.formaPagamentoJson.descricao;
      this.tipo = this.formaPagamentoJson.tipo.descricao;
      this.status = this.formaPagamentoJson.status.codigo;
      this.idFormaPagamento = this.formaPagamentoJson.idTipoFormaPagamento;
      this.title = "Editar Forma de Pagamento";
  }

  limparCampos() {
    this.formaPagamentoArray = [];
    this.status = "ativo";
    this.idFormaPagamento = 0;
    this.tipo = "Nenhum";
    this.descricao = "";
    this.title = "Inserir Forma de Pagamento";
    }

  public getFormaPagamentoById(formaPagamento: FormaPagamento) {
    this.formaPagamentoService.findFormaPagamentoById(formaPagamento).subscribe((formaPagamento: FormaPagamento) => {
      // this.formaPagamento = formaPagamento;
    });
  }

  public saveOrUpdate() {
    if(this.idFormaPagamento && this.idFormaPagamento > 0) return this.updateFormaPagamento();
    return this.saveFormaPagamento();
  }

  public saveFormaPagamento() {
    this.createFormaPagamento(false);
    this.formaPagamentoService.save(this.formaPagamento).subscribe(resultado => {
      console.log(resultado);
      this.aoSalvar.emit({'atualizar': true});
      this.close();
    },
    (error) => console.error(error)
    );
  }

  public updateFormaPagamento() {
    this.createFormaPagamento(true);
    this.formaPagamentoService.update(this.formaPagamento).subscribe(resultado => {
      console.log(resultado);
      this.aoSalvar.emit({'atualizar': true});
      this.close();
    },
    (error) => console.error(error)
    );
  }

  public createFormaPagamento(isUpdate: boolean) {
    this.formaPagamento = {
      idTipoFormaPagamento: isUpdate ? this.idFormaPagamento : undefined,
      descricao: this.descricao,
      status: this.selectStatus(),
      tipo: this.selectTipo(),
    }
  }

  public selectStatus() {
    return this.status == 'ativo' ? 0 : 1;
  }

  public selectTipo() {
    var tipo = 0; //Nenhum
    if(this.tipo == 'Boleto') tipo = 1;
    if(this.tipo == 'Cheque') tipo = 2;
    return tipo;
  }
}
