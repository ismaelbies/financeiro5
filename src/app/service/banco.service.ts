import { Banco } from './../models/banco';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private bancoArray:Array<Banco> = [];
  private url = "http://localhost:8083/api/financeiro/banco";
  private token: string = "eyJjb2RpZ28iOjEsCiAgIm5vbWUiOiJ0ZXN0ZSIsCiAgImxvZ2luIjoidGVzdGUiLAogICJwZXJmaWwiOiIwIiwKICAiZW1wcmVzYSI6ewkiY29kaWdvIjoxLAogICAgICAgICAgICAgICAgICAgICAJIm5vbWUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImZhbnRhc2lhIjoiIiwKICAgICAgICAgICAgICAgICAgICAgIAkiY25waiI6IiIsCiAgICAgICAgICAgICAgICAgICAgIAkidGVsZWZvbmUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImVuZGVyZWNvIjoiIiwKICAgICAgICAgICAgICAgICAgICAgCSJiYWlycm8iOiIiLAogICAgICAgICAgICAgICAgICAgICAJImNpZGFkZSI6IiIsCgkJImNlcCI6IiIsCgkJImVtYWlsIjoiIiwKCQkidWYiOiIiLAoJCSJ0aXBvU2lzdGVtYSI6IlBPUlRBTFBPU1RBTCJ9LAoiYmFuY29EYWRvcyI6IjA4MTQzNTg1MDAwMTAwIn0";

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  insertHeaders() {
    return new HttpHeaders({'Authorization':'Basic ' .concat(this.token)});
   }

  findAll(): Observable<Banco[]> {
    const headers = this.insertHeaders();
    return this.httpClient.get<Banco[]>(this.url, {headers: headers});
  }

  findById(banco: Banco): Observable<Banco> {
    const headers = this.insertHeaders();
    const urlWithId = this.url.concat(`/${banco.idBanco}`);
    return this.httpClient.get<Banco>(urlWithId, {headers: headers});
  }

  save(banco: Banco): Observable<Banco> {
    const headers = this.insertHeaders();
    return this.httpClient.post<Banco>(this.url, banco, {headers: headers});
  }

  update(banco: any): Observable<Banco> {
    const headers = this.insertHeaders();
    const urlUpdate = this.url.concat(`/${banco.idBanco}`);
    return this.httpClient.put<Banco>(urlUpdate, banco, {headers: headers});
  }

  delete(banco: Banco): Observable<any> {
    const headers = this.insertHeaders();
    const urlDelete = this.url.concat(`/${banco.idBanco}`);
    return this.httpClient.delete<Banco>(urlDelete, {headers: headers});
  }
}
