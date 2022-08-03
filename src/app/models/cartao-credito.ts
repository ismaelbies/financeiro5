export interface CartaoCredito {
  idCartaoCredito?: number | undefined,
  idContaCorrente: number
  nome: string
  bandeira: string
  diaFechamento: number
  diaVencimento: number
  valorLimiteCredito: number
  numero: number
  codigoSeguranca: string
  nomeTitular: string
}
