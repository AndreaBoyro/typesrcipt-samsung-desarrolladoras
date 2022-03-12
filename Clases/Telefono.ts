export class Telefono {
  private Tipo: string;
  private Numero: number;
  constructor(tipo: string, numero: number) {
    this.Tipo = tipo;
    this.Numero = numero;
  }
  public set tipo(tipo: string) {
    this.Tipo = tipo;
  }
  public get tipo() {
    return this.Tipo;
  }
  public set numero(num: number) {
    this.Numero = num;
  }
  public get numero() {
    return this.Numero;
  }
}
