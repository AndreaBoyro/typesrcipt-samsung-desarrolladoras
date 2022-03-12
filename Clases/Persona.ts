import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _DNI: string;
  private _cumpleaños: string;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Direccion[] = [];
  private _mails: Mail[] = [];
  private _telefonos: Telefono[] = [];
  private _notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumple: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion,
    mails: Mail,
    telefonos: Telefono,
    notas: string
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._DNI = dni;
    this._cumpleaños = cumple;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones.push(direcciones);
    this._mails.push(mails);
    this._telefonos.push(telefonos);
    this._notas = notas;
  }
  public set nombre(nom: string) {
    this._nombre = nom;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set apellidos(ape: string) {
    this._apellidos = ape;
  }
  public get apellidos(): string {
    return this._apellidos;
  }
  public set edad(edad: number) {
    this._edad = edad;
  }
  public get edad(): number {
    return this._edad;
  }
  public set dni(dni: string) {
    this._DNI = dni;
  }
  public get dni(): string {
    return this._DNI;
  }
  public set cumple(cumple: string) {
    this._cumpleaños = cumple;
  }
  public get cumple(): string {
    return this._cumpleaños;
  }
  public set colorFav(colorFav: string) {
    this._colorFavorito = colorFav;
  }
  public get colorFav(): string {
    return this._colorFavorito;
  }
  public get sexo(): string {
    return this._sexo;
  }
  public set sexo(sex: string) {
    this._sexo = sex;
  }
  public get direcciones(): Direccion[] {
    return this._direcciones;
  }
  public set direcciones(dir: Direccion[]) {
    this._direcciones = dir;
  }
  public get mails(): Mail[] {
    return this._mails;
  }
  public set mails(mail: Mail[]) {
    this._mails = mail;
  }
  public get telefonos(): Telefono[] {
    return this._telefonos;
  }
  public set telefonos(tel: Telefono[]) {
    this._telefonos = tel;
  }
  public get notas(): string {
    return this._notas;
  }
  public set notas(nota: string) {
    this._notas = nota;
  }
}
