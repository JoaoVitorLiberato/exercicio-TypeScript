export class ContaBancaria{
  private _agencia: string; 
  private _numero: string;
  private _saldo: number;

  constructor( agencia: string, numero: string){
    this._saldo = 0;
    this._numero = this._validarNumero(numero)? numero : '00000-0';
    this._agencia= this._validarAgencia(numero)? agencia : '0000'  ;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(valor : string){
   
    if (this._validarNumero(valor)) {
      this._numero = valor;
    } else {
      console.error('Agencia ou número da conta inválido.');
    }
  }

  get agencia(): string {
    return this._agencia;
  }

  set agencia(valor : string){
 
    if (this._validarAgencia(valor)) {
      this._agencia = valor;
    } else {
      console.error('Agencia ou número da conta inválido.');
    }
  }

  consultar(): number {
    return this._saldo;
  }

  depositar(valor: number): boolean {
    if(valor >= 0){
      this._saldo += valor;
      return true;
    }
    return false
  }

  sacar(valor: number): boolean  {
    if(valor > 0 && this._saldo > valor){
      this._saldo -= valor;
      return true;
    } 

    return false;  
  }

  private _validarNumero(numero: string): boolean{
    const regex = /^\d{5}-\d{1}$/
    if (regex.test(numero)) {
      this._numero = numero;
      return true;
    } 
    return false;
  }

  private _validarAgencia(numero: string): boolean{
    const regex = /^\d{4}$/
    if (regex.test(numero)) {
      this._agencia = numero;
      return true;
    }
    return false;
  }
}