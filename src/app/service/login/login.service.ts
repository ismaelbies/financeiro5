import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = "http://localhost:8083/api/financeiro/conta";
  private token: string = "eyJjb2RpZ28iOjEsCiAgIm5vbWUiOiJ0ZXN0ZSIsCiAgImxvZ2luIjoidGVzdGUiLAogICJwZXJmaWwiOiIwIiwKICAiZW1wcmVzYSI6ewkiY29kaWdvIjoxLAogICAgICAgICAgICAgICAgICAgICAJIm5vbWUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImZhbnRhc2lhIjoiIiwKICAgICAgICAgICAgICAgICAgICAgIAkiY25waiI6IiIsCiAgICAgICAgICAgICAgICAgICAgIAkidGVsZWZvbmUiOiIiLAogICAgICAgICAgICAgICAgICAgICAJImVuZGVyZWNvIjoiIiwKICAgICAgICAgICAgICAgICAgICAgCSJiYWlycm8iOiIiLAogICAgICAgICAgICAgICAgICAgICAJImNpZGFkZSI6IiIsCgkJImNlcCI6IiIsCgkJImVtYWlsIjoiIiwKCQkidWYiOiIiLAoJCSJ0aXBvU2lzdGVtYSI6IlBPUlRBTFBPU1RBTCJ9LAoiYmFuY29EYWRvcyI6IjA4MTQzNTg1MDAwMTAwIn0";
  public urlIntegracao: any;
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
   }

  login() {
  const accessUrl = this.url + "?token=" + this.token;

    // req = req.clone({
    //   setHeaders: {
    //     Authorization: 'Basic '.concat(this.financeiroIntegradoService.getTokenFinanceiro())
    //   });
    const headers = new HttpHeaders({'Authorization':'Basic ' .concat(this.token)});
    const a = this.httpClient.get(accessUrl, {headers: headers});
    // this.urlIntegracao = this.sanitizer.bypassSecurityTrustResourceUrl(accessUrl);
    // console.log(this.urlIntegracao);
    console.log(a);
    return a;
    // localStorage.setItem('','');
  }


  // a() {
    // let pathUrl = '/easy'.concat(this.router.url);
    // const url = environment.apiUrlFinanceiro.concat(pathUrl).concat('?token=').concat(this.tokenFinanceiroService.getTokenFinanceiro());
    // console.log(url);
    // this.urlIntegracao = this.sanitizer.bypassSecurityTrustResourceUrl(url);
     // const url = environment.apiUrlFinanceiro.concat(pathUrl);
      //this.urlIntegracao = this.sanitizer.bypassSecurityTrustResourceUrl(url + '?token=eyJjb2RpZ28iOjE2MDksIm5vbWUiOiJMb2dpbiIsImxvZ2luIjoiZWFzeS5kZW1vIiwicGVyZmlsIjoiMCIsImVtcHJlc2EiOnsiY29kaWdvIjoxMDAyLCJub21lIjoiTWFyaW5hIERlbW8iLCJmYW50YXNpYSI6Ik1hcmluYSBEZW1vIiwiY25waiI6Ijc3Ljc3Ny43NzcvNzc3Ny03NyIsInRpcG9TaXN0ZW1hIjoiUE9SVEFMUE9TVEFMIn0sImJhbmNvRGFkb3MiOiI3Nzc3Nzc3Nzc3Nzc3NyJ9');

  // }
}
