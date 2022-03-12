"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.Tipo = tipo;
        this.Direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this.Tipo;
        },
        set: function (tipo) {
            this.Tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccion", {
        set: function (dir) {
            this.Direccion = dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "numero", {
        get: function () {
            return this.Direccion;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
