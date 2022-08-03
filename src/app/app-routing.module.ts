import { HeaderComponent } from './components/header/header.component';
import { ContaCorrenteCadastroComponent } from './pages/cadastros/conta-corrente/conta-corrente-cadastro/conta-corrente-cadastro.component';
import { ContaCorrentePesquisaComponent } from './pages/cadastros/conta-corrente/conta-corrente-pesquisa/conta-corrente-pesquisa.component';
import { FormaPagamentoCadastroComponent } from './pages/cadastros/forma-pagamento/forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { FormaPagamentoPesquisaComponent } from './pages/cadastros/forma-pagamento/forma-pagamento-pesquisa/forma-pagamento-pesquisa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoCreditoPesquisaComponent } from './pages/cadastros/cartao-credito/cartao-credito-pesquisa/cartao-credito-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastros/conta-corrente',
  },
  {
    path: 'cadastros/forma-pagamento',
    component: FormaPagamentoPesquisaComponent
    // loadChildren: () => import('./pages/cadastros2/cadastros2.module').then((m) => m.Cadastros2Module),
  },
  {
    path: 'cadastros/conta-corrente',
    component: ContaCorrentePesquisaComponent
    // loadChildren: () => import('./pages/cadastros2/cadastros2.module').then((m) => m.Cadastros2Module),
  },
  {
    path: 'cadastros/cartao-credito',
    component: CartaoCreditoPesquisaComponent
    // loadChildren: () => import('./pages/cadastros2/cadastros2.module').then((m) => m.Cadastros2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
