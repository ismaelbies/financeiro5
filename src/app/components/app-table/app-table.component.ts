import { FormaPagamentoService } from './../../service/forma-pagamento/forma-pagamento.service';
import { FormaPagamento } from './../../models/forma-pagamento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.sass']
})
export class AppTableComponent implements OnInit {

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
