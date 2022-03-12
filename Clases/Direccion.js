"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.Calle = calle;
        this.Numero = numero;
        this.Piso = piso;
        this.Letra = letra;
        this.CodigoPostal = codigoPostal;
        this.Poblacion = poblacion;
        this.Provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this.Calle;
        },
        set: function (calle) {
            this.Calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this.Numero;
        },
        set: function (num) {
            this.Numero = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this.Letra;
        },
        set: function (letra) {
            this.Letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "codigoPostal", {
        get: function () {
            return this.CodigoPostal;
        },
        set: function (codPos) {
            this.CodigoPostal = codPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this.Poblacion;
        },
        set: function (poblacion) {
            this.Poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this.Provincia;
        },
        set: function (provincia) {
            this.Provincia = provincia;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
