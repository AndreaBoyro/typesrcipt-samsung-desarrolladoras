export class Mail {
  private Tipo: string;
  private Direccion: string;
  constructor(tipo: string, direccion: string) {
    this.Tipo = tipo;
    this.Direccion = direccion;
  }
  public set tipo(tipo: string) {
    this.Tipo = tipo;
  }
  public get tipo() {
    return this.Tipo;
  }
  public set direccion(dir: string) {
    this.Direccion = dir;
  }
  public get numero() {
    return this.Direccion;
  }
}
