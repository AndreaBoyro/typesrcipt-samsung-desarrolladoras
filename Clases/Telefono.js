"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.Tipo = tipo;
        this.Numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this.Tipo;
        },
        set: function (tipo) {
            this.Tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this.Numero;
        },
        set: function (num) {
            this.Numero = num;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
