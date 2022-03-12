export class Direccion {
  private Calle: string;
  private Numero: number;
  private Piso: number;
  private Letra: string;
  private CodigoPostal: number;
  private Poblacion: string;
  private Provincia: string;
  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: number,
    poblacion: string,
    provincia: string
  ) {
    this.Calle = calle;
    this.Numero = numero;
    this.Piso = piso;
    this.Letra = letra;
    this.CodigoPostal = codigoPostal;
    this.Poblacion = poblacion;
    this.Provincia = provincia;
  }
  public get calle(): string {
    return this.Calle;
  }
  public set calle(calle: string) {
    this.Calle = calle;
  }
  public get numero(): number {
    return this.Numero;
  }
  public set numero(num: number) {
    this.Numero = num;
  }
  public get letra(): string {
    return this.Letra;
  }
  public set letra(letra: string) {
    this.Letra = letra;
  }
  public get codigoPostal(): number {
    return this.CodigoPostal;
  }
  public set codigoPostal(codPos: number) {
    this.CodigoPostal = codPos;
  }
  public get poblacion(): string {
    return this.Poblacion;
  }
  public set poblacion(poblacion: string) {
    this.Poblacion = poblacion;
  }
  public get provincia(): string {
    return this.Provincia;
  }
  public set provincia(provincia: string) {
    this.Provincia = provincia;
  }
}
