"use strict";
var Tripleta = /** @class */ (function () {
    function Tripleta(fila, columna, valor) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
    Tripleta.prototype.setFila = function (fila) {
        this.fila = fila;
    };
    Tripleta.prototype.setColumna = function (columna) {
        this.columna = columna;
    };
    Tripleta.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Tripleta.prototype.getFila = function () {
        return this.fila;
    };
    Tripleta.prototype.getColumna = function () {
        return this.columna;
    };
    Tripleta.prototype.getValor = function () {
        return this.valor;
    };
    return Tripleta;
}());
