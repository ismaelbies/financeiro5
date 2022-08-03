import { Banco } from './../../../../models/banco';
import { ContaCorrente } from './../../../../models/conta-corrente';
import { ContaCorrenteService } from './../../../../service/conta-corrente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-corrente-pesquisa',
  templateUrl: './conta-corrente-pesquisa.component.html',
  styleUrls: ['./conta-corrente-pesquisa.component.sass']
})
export class ContaCorrentePesquisaComponent implements OnInit {

  public contaCorrenteArray: ContaCorrente[] = [];
  public array = [];
  public total: number = 0;
  public displayDeleteModal: boolean = false;
  public displayDetailsModal: boolean = false;
  public title = 'Conta Corrente';
  public detailsModalTitle = 'Visualizar Conta Corrente';
  public contaDelete = {} as any;
  public conta = {} as ContaCorrente;
  public banco = {} as Banco;

  constructor(private contaCorrenteService: ContaCorrenteService) { }


  ngOnInit(): void {
    this.findContaCorrente();
  }

  public findContaCorrente() {
    this.contaCorrenteService.findAll().subscribe((contaCorrenteArray: ContaCorrente[]) => {
      this.contaCorrenteArray = contaCorrenteArray;
      this.total = contaCorrenteArray.length;
    });
  }

  editRow($event: any) {
    console.log($event);
  }

  deleteRow(array: ContaCorrente) {
    this.contaDelete = array;
    this.displayDeleteModal = true;
  }

  closeDeleteModal() {
    this.displayDeleteModal = false;
  }

  closeDetailsModal() {
    this.displayDetailsModal = false;
  }

  deleteConta() {
    this.contaCorrenteService.delete(this.contaDelete).subscribe((resultado) => {
      this.findContaCorrente();
      this.displayDeleteModal = false;
    })
  }

  mostrarDetalhes(array: any) {
    console.log(array);
    this.displayDetailsModal = true;
    this.conta = array;
    this.banco = this.conta.banco;
  }
}
