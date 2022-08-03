import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormaPagamento } from 'src/app/models/forma-pagamento';
import { FormaPagamentoService } from 'src/app/service/forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-pesquisa',
  templateUrl: './forma-pagamento-pesquisa.component.html',
  styleUrls: ['./forma-pagamento-pesquisa.component.sass']
})
export class FormaPagamentoPesquisaComponent implements OnInit {

  @Input() columnsArray = Array<any>();
  @Output() aoClicar = new EventEmitter();
  formulario = FormGroup;
  displayModal = false;
  displayDeleteModal = false;
  total = 0;
  parcial = 0;
  idTipoFormaPagamento : number | undefined = undefined;
  formaPagamentoArray: FormaPagamento[] = [];
  public formaPagamento = {} as any;
  public title = 'Forma Pagamento';

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.getFormaPagamento();
  }

  editRow($event: any, array: Array<FormaPagamento>) {
    this.displayModal = true;
    const json = {displayModal: this.displayModal, array: array};
    this.aoClicar.emit(json);
  }

  deleteRow($event: any, array: FormaPagamento) {
    this.displayDeleteModal = true;
    this.idTipoFormaPagamento = array.idTipoFormaPagamento;
    this.formaPagamento = array;
    const json = {displayModal: this.displayModal, array: array};
    // this.aoClicar.emit(json);
  }

  definirIcone(status: boolean) {
    if(!status) return `pi pi-circle-fill text-danger`;
    return `pi pi-circle-fill text-warning`
  }

  getFormaPagamento() {
    this.formaPagamentoService.findFormaPagamento().subscribe((formaPagamentoArray: FormaPagamento[]) => {
      this.formaPagamentoArray = formaPagamentoArray;
      this.total = formaPagamentoArray.length;
    });
  }

  closeDeleteModal() {
    this.displayDeleteModal = false;
  }

  deleteFormaPagamento() {
    this.formaPagamentoService.delete(this.formaPagamento).subscribe((resultado) => {
      console.log(resultado);
      this.getFormaPagamento();
      this.displayDeleteModal = false;
    });
  }

}
