import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CartaoCredito } from 'src/app/models/cartao-credito';
import { CartaoCreditoService } from 'src/app/service/cartao-credito.service';

@Component({
  selector: 'app-cartao-credito-cadastro',
  templateUrl: './cartao-credito-cadastro.component.html',
  styleUrls: ['./cartao-credito-cadastro.component.sass']
})
export class CartaoCreditoCadastroComponent implements OnInit {

  private cartaoCredito = {} as any;
  formulario!: FormGroup;

  constructor(
    private cartaoCreditoService: CartaoCreditoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.config.data.id);
    if (this.config.data.id > 0) {
      this.getCartaoCreditoById(this.config.data.id);
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
      poupanca: ['false', [Validators.required]],
      limite: ['', [Validators.required, Validators.min(0)]],
    });
  }

  getCartaoCreditoById(id: number) {
    this.cartaoCreditoService.findById(id).subscribe((cartaoCredito: CartaoCredito) => {
      this.formulario.patchValue(cartaoCredito);
      console.log(this.formulario);
    });
  }

  public saveOrUpdate() {
    if(this.formulario.get('idCartaoCredito')?.value > 0) this.updateCartaoCredito();
    else this.saveCartaoCredito();
  }

  public saveCartaoCredito() {
    this.createCartaoCredito(false);
    this.cartaoCreditoService.save(this.cartaoCredito).subscribe(resultado => {
      console.log(resultado);
      this.ref.close();
    },
    (error) => console.error(error)
    );
  }

  public updateCartaoCredito() {
    this.createCartaoCredito(true);
    this.cartaoCreditoService.update(this.cartaoCredito).subscribe(resultado => {
      console.log(resultado);
      this.ref.close();
    },
    (error) => console.error(error)
    );
  }

  public closeDialog() {
    this.ref.close();
  }

  public createCartaoCredito(isUpdate: boolean) {
    this.cartaoCredito = {
      idCartaoCredito: isUpdate ? this.formulario.get('idCartaoCredito')?.value : null,
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
