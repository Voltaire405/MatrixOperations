"use strict";
//Pruebas
function probar() {
    var m = 2;
    var n = 3;
    //let input: number[][] = [[0,0,0,0], [0, 3, 0, 4], [0, 0, 1, 5]];
    var input = [[0, 0], [0, 0, 3], [0, 1, 0], [0, 2, 4]];
    //let input: number[][] = [[0,0],[0,1,0,0], [0,0,1,0], [0,0,0,1]];
    //let input: number[][] = [[0,0,0,0],[0, 8, 1, 26], [0, 13, 15, 17], [0, 4, 9, 32]];
    //let input: number[][] = [[0,0,0,0],[0, -4, -2, 1], [0, 4, 2, 2]];
    var matriz = new MatrizForma1(m, n);
    matriz.convertirAMatrizForma1(input);
    //matriz.mostrarMatriz();
    //let simetrica=matriz.simetrica();
    //console.log("Simetrica: " + simetrica);
    var pSilla = matriz.puntoSilla();
    console.log(pSilla);
    /*
    console.log("matriz\n");
    matriz.mostrarMatriz();
    console.log("\ntrapuesta\n")
    let matrizTrasppuesta= matriz.traspuesta();
    matrizTrasppuesta.mostrarMatriz();
    */
}
