"use strict";
var NodoDoble = /** @class */ (function () {
    function NodoDoble(dato) {
        this.dato = dato;
        this.li = null;
        this.ld = null;
    }
    NodoDoble.prototype.getDato = function () {
        return this.dato;
    };
    NodoDoble.prototype.setDato = function (dato) {
        this.dato = dato;
    };
    NodoDoble.prototype.getLi = function () {
        return this.li;
    };
    NodoDoble.prototype.setLi = function (li) {
        this.li = li;
    };
    NodoDoble.prototype.getLd = function () {
        return this.ld;
    };
    NodoDoble.prototype.setLd = function (ld) {
        this.ld = ld;
    };
    return NodoDoble;
}());
