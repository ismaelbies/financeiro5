import { BancoService } from './../../../../service/banco.service';
import { ContaCorrenteService } from './../../../../service/conta-corrente.service';
import { ContaCorrente } from './../../../../models/conta-corrente';
import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/models/banco';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conta-corrente-cadastro',
  templateUrl: './conta-corrente-cadastro.component.html',
  styleUrls: ['./conta-corrente-cadastro.component.sass']
})
export class ContaCorrenteCadastroComponent implements OnInit {

  private contaCorrente = {} as any;
  private idContaCorrente: number = 0;
  public bancoArray: Banco[] = [];
  formulario!: FormGroup;

  constructor(
    private contaCorrenteService: ContaCorrenteService,
    private bancoService: BancoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getBancos();
    this.createForm();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.getContaCorrenteById(id);
    }
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      idContaCorrente: ['0', ],
      nome: ['', [Validators.required]],
      banco : this.formBuilder.group({
        idBanco: [''],
        nome: [''],
        numero: [''],
        website: [''],
      }),
      agenciaDv: ['', [Validators.required]],
      agencia: [''],
      contaCorrente: ['', [Validators.required]],
      contaCorrenteDv: [''],
      poupanca: ['', [Validators.required]],
      limite: ['', [Validators.required, Validators.min(0)]],
    });
  }

  // "idContaCorrente": 4,
  // "nome": "s",
  // "banco": {
  //     "idBanco": 55,
  //     "nome": "BANCO DO BRASIL S.A.",
  //     "numero": 1,
  //     "website": null,
  //     "contaCorrentes": null
  // },
  // "agencia": 1,
  // "agenciaDv": "a",
  // "contaCorrente": 1,
  // "contaCorrenteDv": "1",
  // "poupanca": false,
  // "limite": 10000.0,

  public getContaCorrenteById(idContaCorrente: number) {
    this.contaCorrenteService.findById(idContaCorrente).subscribe((contaCorrente: ContaCorrente) => {
      this.formulario.patchValue(contaCorrente);
      console.log(this.formulario);
      // this.formaPagamento = formaPagamento;
    });
  }

  public getBancos() {
    this.bancoService.findAll().subscribe((bancos: Banco[]) => {
      this.bancoArray = bancos;
      // this.formaPagamento = formaPagamento;
    });
  }

  public saveOrUpdate() {
    if(this.formulario.get('idContaCorrente')?.value > 0) this.updateContaCorrente();
    else this.saveContaCorrente();
  }

  public saveContaCorrente() {
    this.createContaCorrente(false);
    this.contaCorrenteService.save(this.contaCorrente).subscribe(resultado => {
      console.log(resultado);
    },
    (error) => console.error(error)
    );
  }

  public updateContaCorrente() {
    this.createContaCorrente(true);
    this.contaCorrenteService.update(this.contaCorrente).subscribe(resultado => {
      console.log(resultado);
    },
    (error) => console.error(error)
    );
  }

  public createContaCorrente(isUpdate: boolean) {
    console.log(this.formulario.get('banco')?.get('idBanco')?.value);
    this.contaCorrente = {
      idContaCorrente: isUpdate ? this.formulario.get('idContaCorrente')?.value : null,
      nome: this.formulario.get('nome')?.value,
      agencia: this.formulario.get('agencia')?.value,
      contaCorrente: this.formulario.get('contaCorrente')?.value,
      poupanca: this.formulario.get('poupanca')?.value,
      carteiraCobrancas: null,
      limite: this.formulario.get('limite')?.value,
      banco : {
        idBanco: this.formulario.get('banco')?.get('idBanco')?.value
      },
      agenciaDv: null,
      contaCorrenteDv: null
    }
    console.log(this.formulario);
  }
}
