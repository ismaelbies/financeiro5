import { LoginService } from './service/login/login.service';
import { FormaPagamento } from './models/forma-pagamento';
import { FormaPagamentoService } from './service/forma-pagamento/forma-pagamento.service';
import { Component, Output, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import { EventEmitter } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {

  @Output() aoCadastrar = new EventEmitter();
  @ViewChild('demoBasic') demoBasic?: ModalComponent;
  @ViewChild(TableModule) dt?: TableModule;

  public title = 'Formas de Pagamento';
  public display = false;
  public array!: FormaPagamento;
  public formaPagamentoArray: FormaPagamento[] = [];
  public columnsArray = [
    // {title: 'ID', type: '', lable: '', field: 'idTipoFormaPagamento'},
    {title: 'Situação', type: '', lable: '', field: 'status'},
    {title: 'Código', type: '', lable: '', field: 'tipo'},
    {title: 'Descrição', type: '', lable: '', field: 'descricao'}
  ];

  constructor(private formaPagamentoService: FormaPagamentoService, private loginService: LoginService) {
  }

  public findFormaPagamento() {
    this.formaPagamentoService.findFormaPagamento().subscribe((formaPagamentoArray: FormaPagamento[]) => {
      this.formaPagamentoArray = formaPagamentoArray;
    });
  }

  public login() {
    this.loginService.login().subscribe(resultado => {
      // localStorage.setItem('user', resultado);
      console.log(resultado);
      // localStorage.setItem('usuario',resultado.usuario);
    });
  }

  public saveFormaPagamento() {
    this.formaPagamentoService.save(this.array).subscribe(resultado => {
      console.log(resultado);
    },
    (error) => console.error(error)
    );
  }

  public openModal() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  close() {
    this.display = false;

  }

  transferir($event: any) {
    console.log($event);
    this.display = $event.displayModal;
    this.array = $event.array;
  }

  updateTable($event: any) {
  }
}
