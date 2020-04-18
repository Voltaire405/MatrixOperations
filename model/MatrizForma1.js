"use strict";
var MatrizForma1 = /** @class */ (function () {
    function MatrizForma1(m, n) {
        var t = new Tripleta(m, n, null);
        this.mat = new NodoDoble(t);
        t.setValor(this.mat);
        this.mat.setDato(t);
    }
    MatrizForma1.prototype.nodoCabeza = function () {
        return this.mat;
    };
    MatrizForma1.prototype.primerNodo = function () {
        var tp = this.mat.getDato();
        var p = tp.getValor();
        return p;
    };
    MatrizForma1.prototype.numeroFilas = function () {
        return this.nodoCabeza().getDato().getFila();
    };
    MatrizForma1.prototype.numeroColumnas = function () {
        return this.nodoCabeza().getDato().getColumna();
    };
    MatrizForma1.prototype.esVacia = function () {
        var p = this.primerNodo();
        return (p == this.mat);
    };
    MatrizForma1.prototype.finDeRecorrido = function (p) {
        return (p == this.mat);
    };
    MatrizForma1.prototype.mostrarMatriz = function () {
        var qf;
        var qc;
        var qv;
        var p;
        var q;
        var tq;
        var tp;
        p = this.primerNodo();
        while (!this.finDeRecorrido(p)) {
            q = p.getLd();
            while (q != p) {
                tq = q.getDato();
                qf = tq.getFila();
                qc = tq.getColumna();
                qv = tq.getValor();
                console.log("\nfila: " + qf +
                    "\ncolumna: " + qc +
                    "\nvalor: " + qv);
                q = q.getLd();
            }
            tp = p.getDato();
            p = tp.getValor();
        }
    };
    MatrizForma1.prototype.construyeNodosCabeza = function () {
        var mayor;
        var i;
        var x;
        var ultimo;
        var t;
        ultimo = this.nodoCabeza();
        t = ultimo.getDato();
        var m = t.getFila();
        var n = t.getColumna();
        mayor = m;
        if (n > m) {
            mayor = n;
        }
        for (var i_1 = 1; i_1 <= mayor; i_1++) {
            t = new Tripleta(i_1, i_1, this.nodoCabeza());
            x = new NodoDoble(t);
            x.setLd(x);
            x.setLi(x);
            t = ultimo.getDato();
            t.setValor(x);
            ultimo.setDato(t);
            ultimo = x;
        }
    };
    MatrizForma1.prototype.conectaPorFilas = function (x) {
        var p;
        var q;
        var anterior;
        var tp;
        var tq;
        var tx;
        var i;
        tx = x.getDato();
        p = this.primerNodo();
        for (var i_2 = 1; i_2 < tx.getFila(); i_2++) {
            tp = p.getDato();
            p = tp.getValor();
        }
        anterior = p;
        q = p.getLd();
        tq = q.getDato();
        while ((q != p) && (tq.getColumna() < tx.getColumna())) {
            anterior = q;
            q = q.getLd();
            tq = q.getDato();
        }
        anterior.setLd(x);
        x.setLd(q);
    };
    MatrizForma1.prototype.conectaPorColumnas = function (x) {
        var p;
        var q;
        var anterior;
        var tp;
        var tq;
        var tx;
        var i;
        tx = x.getDato();
        p = this.primerNodo();
        for (var i_3 = 1; i_3 < tx.getColumna(); i_3++) {
            tp = p.getDato();
            p = tp.getValor();
        }
        anterior = p;
        q = p.getLi();
        tq = q.getDato();
        while ((q != p) && (tq.getFila() < tx.getFila())) {
            anterior = q;
            q = q.getLi();
            tq = q.getDato();
        }
        anterior.setLi(x);
        x.setLi(q);
    };
    /**
     * Convierte un arreglo de dos dimensiones en una matriz en forma 1
     * @param matrizArray Arreglo de dos dimensiones que representa a una matriz
     */
    MatrizForma1.prototype.convertirAMatrizForma1 = function (matrizArray) {
        var m = this.numeroFilas();
        var n = this.numeroColumnas();
        this.construyeNodosCabeza();
        var valor;
        for (var i = 1; i <= m; i++) {
            for (var j = 1; j <= n; j++) {
                valor = matrizArray[i][j];
                if (valor == 0) {
                    continue;
                }
                var t = new Tripleta(i, j, valor);
                var nodo = new NodoDoble(t);
                this.conectaPorFilas(nodo);
                this.conectaPorColumnas(nodo);
            }
        }
    };
    MatrizForma1.prototype.traspuesta = function () {
        var q, tq, tx, x;
        var p = this.nodoCabeza();
        var tp = p.getDato();
        var matrizTraspuesta = new MatrizForma1(tp.getColumna(), tp.getFila());
        matrizTraspuesta.construyeNodosCabeza();
        p = this.primerNodo();
        while (!this.finDeRecorrido(p)) {
            q = p.getLd();
            tq = q.getDato();
            while (q != p) {
                tx = new Tripleta(tq.getColumna(), tq.getFila(), tq.getValor());
                x = new NodoDoble(tx);
                matrizTraspuesta.conectaPorFilas(x);
                matrizTraspuesta.conectaPorColumnas(x);
                q = q.getLd();
                tq = q.getDato();
            }
            tp = p.getDato();
            p = tp.getValor();
        }
        return matrizTraspuesta;
    };
    /**
     * Determina si la matriz es simetrica comparandola con su traspuesta
     * @returns booleano con valor true si es simetrica, false de lo contrario
     */
    MatrizForma1.prototype.simetrica = function () {
        var p1, p2, q1, q2;
        var tp1, tp2, tq1, tq2;
        var simetrica = true;
        var matrizTraspuesta = this.traspuesta();
        p1 = this.primerNodo();
        p2 = matrizTraspuesta.primerNodo();
        if (this.numeroFilas() != this.numeroColumnas()) {
            simetrica = false;
        }
        while (!this.finDeRecorrido(p1) && (simetrica == true)) {
            q1 = p1.getLd();
            q2 = p2.getLd();
            while ((q1 != p1) || (q2 != p2)) {
                //evalua que haya la misma cantidad de elementos diferentes de cero
                //por cada fila en las dos matrices
                if ((q1 != p1 && q2 == p2) || (q2 != p2 && q1 == p1)) {
                    simetrica = false;
                }
                //comparación por el numero de la fila, columna y valor de cada nodo
                tq1 = q1.getDato();
                tq2 = q2.getDato();
                if ((tq1.getFila() != tq2.getFila()) || (tq1.getColumna() != tq2.getColumna()) ||
                    (tq1.getValor() != tq2.getValor()))
                    simetrica = false;
                q1 = q1.getLd();
                q2 = q2.getLd();
            }
            tp1 = p1.getDato();
            p1 = tp1.getValor();
            tp2 = p2.getDato();
            p2 = tp2.getValor();
        }
        return simetrica;
    };
    MatrizForma1.prototype.determinante = function () {
        return;
    };
    /**
     * Calcula el punto de silla
     * @returns retorna un arreglo de numeros. Si la matriz tiene punto de silla
     * retornará un arreglo en el que la primera posición será un 1 (de lo contrario un -1),
     * los siguiente indices del arreglo corresponden a la fila, columna y valor del punto de silla.
     */
    MatrizForma1.prototype.puntoSilla = function () {
        var respuesta;
        var k, psi, psj, numeroFilas, numeroColumnas;
        var tx, tq, tp;
        var cab, p, q;
        var matriz = this.traspuesta();
        cab = matriz.nodoCabeza();
        tx = cab.getDato();
        numeroFilas = tx.getFila();
        numeroColumnas = tx.getColumna();
        psi = 0;
        p = matriz.primerNodo();
        while (!matriz.finDeRecorrido(p)) {
            tp = p.getDato();
            psi = matriz.filaMenorDato(p, numeroColumnas);
            if (psi != 0) {
                q = matriz.primerNodo();
                for (k = 1; k < psi; k++) {
                    tq = q.getDato();
                    q = tq.getValor();
                }
                psj = matriz.columnaMayorDato(q, numeroFilas);
                if (psj == tp.getFila()) {
                    respuesta = [1, psi, tp.getFila()];
                    q = p.getLd();
                    while (q != p) {
                        tq = q.getDato();
                        if (tq.getColumna() == psi) {
                            respuesta.push(tq.getValor());
                            return respuesta;
                        }
                        q = q.getLd();
                    }
                    respuesta.push(0);
                    return respuesta;
                }
            }
            tp = p.getDato();
            p = tp.getValor();
        }
        respuesta = [-1];
        return respuesta;
    };
    /**
     * Busca el menor dato de una fila en particular en la matriz traspuesta de la matriz original
     * @param pp Nodo doble que indica lista ligada de la fila sobre la cual se buscará el menor dato
     * @param nc numero que indica la cantidad de columnas
     */
    MatrizForma1.prototype.filaMenorDato = function (pp, nc) {
        var menor, j, columna, k, p;
        var qq, tx;
        menor = Number.MAX_VALUE;
        columna = 0;
        j = 0;
        qq = pp.getLd();
        while (qq != pp) {
            j++;
            tx = qq.getDato();
            if (tx.getValor() < menor) {
                menor = tx.getValor();
                columna = tx.getColumna();
            }
            qq = qq.getLd();
        }
        k = 0;
        qq = pp.getLd();
        while (qq != pp) {
            tx = qq.getDato();
            if (tx.getValor() == menor) {
                k++;
            }
            qq = qq.getLd();
        }
        switch (nc - j) {
            case 0:
                if (k == 1)
                    return columna;
                break;
            case 1:
                if (menor < 0 && k == 1)
                    return columna;
                if (menor < 0)
                    return 0;
                qq = pp.getLd();
                tx = qq.getDato();
                p = 1;
                while (tx.getColumna() == p) {
                    qq = qq.getLd();
                    tx = qq.getDato();
                    p++;
                }
                return p;
            default:
                if (menor < 0 && k == 1)
                    return columna;
                break;
        }
        return 0;
    };
    /**
     * Busca el mayor dato de una columna en particular en la matriz traspuesta de la matriz original
     * @param pp Nodo doble que indica lista ligada de la columna sobre la cual se buscará el mayor dato
     * @param nc numero que indica la cantidad de filas
     */
    MatrizForma1.prototype.columnaMayorDato = function (pp, nc) {
        var j, mayor, fila, k, p;
        var qq, tx;
        mayor = Number.MIN_VALUE;
        fila = 0;
        j = 0;
        qq = pp.getLi();
        while (qq != pp) {
            j++;
            tx = qq.getDato();
            if (tx.getValor() > mayor) {
                mayor = tx.getValor();
                fila = tx.getFila();
            }
            qq = qq.getLi();
        }
        k = 0;
        qq = pp.getLi();
        while (qq != pp) {
            tx = qq.getDato();
            if (tx.getValor() == mayor) {
                k++;
            }
            qq = qq.getLi();
        }
        switch (nc - j) {
            case 0:
                if (k == 1)
                    return fila;
                break;
            case 1:
                if (mayor > 0 && k == 1)
                    return fila;
                if (mayor > 0)
                    return 0;
                qq = pp.getLi();
                tx = qq.getDato();
                p = 1;
                while (tx.getFila() == p) {
                    qq = qq.getLi();
                    tx = qq.getDato();
                    p++;
                }
                return p;
            default: if (mayor > 0 && k == 1)
                return fila;
        }
        return 0;
    };
    return MatrizForma1;
}());
