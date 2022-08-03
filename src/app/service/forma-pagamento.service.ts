import { FormaPagamento } from './../models/forma-pagamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  private formaPagamentoArray:Array<FormaPagamento> = [];
  private url2 = "http://localhost:3000/formaPagamento";
  private url = "http://localhost:8083/api/financeiro/tipo/formapagamento";
  private token: string = "eyJjb2RpZ28iOjEsCiAgIm5vbWUiOiJ0ZXN0ZSIsCiAgImxvZ2luIjoidGVzdGUiLAogICJwZXJmaWwiOiIwIiwKICAiZW1wcmVzYSI6ewkiY29kaWdvIjoxLAogICAgICAgICAgICAgICAgICAgICAJIm5vbWUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImZhbnRhc2lhIjoiIiwKICAgICAgICAgICAgICAgICAgICAgIAkiY25waiI6IiIsCiAgICAgICAgICAgICAgICAgICAgIAkidGVsZWZvbmUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImVuZGVyZWNvIjoiIiwKICAgICAgICAgICAgICAgICAgICAgCSJiYWlycm8iOiIiLAogICAgICAgICAgICAgICAgICAgICAJImNpZGFkZSI6IiIsCgkJImNlcCI6IiIsCgkJImVtYWlsIjoiIiwKCQkidWYiOiIiLAoJCSJ0aXBvU2lzdGVtYSI6IlBPUlRBTFBPU1RBTCJ9LAoiYmFuY29EYWRvcyI6IjA4MTQzNTg1MDAwMTAwIn0";


  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
   }

   insertHeaders() {
    return new HttpHeaders({'Authorization':'Basic ' .concat(this.token)});
   }

  findFormaPagamento(): Observable<FormaPagamento[]> {
    const headers = this.insertHeaders();
    return this.httpClient.get<FormaPagamento[]>(this.url, {headers: headers});
  }

  findFormaPagamentoById(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    const urlWithId = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.get<FormaPagamento>(urlWithId, {headers: headers});
  }

  save(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    return this.httpClient.post<FormaPagamento>(this.url, formaPagamento, {headers: headers});
  }

  update(formaPagamento: any): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    const urlUpdate = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.put<FormaPagamento>(urlUpdate, formaPagamento, {headers: headers});
  }

  delete(formaPagamento: FormaPagamento): Observable<any> {
    const headers = this.insertHeaders();
    const urlDelete = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.delete<FormaPagamento>(urlDelete, {headers: headers});
  }
}
