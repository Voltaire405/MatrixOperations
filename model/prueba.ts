//Pruebas




function probar(): void {
    let m = 8;
    let n = 8;
    //let input: number[][] = [[0,0,0,0], [0, 3, 0, 4], [0, 0, 1, 5]];
    //let input: number[][] = [[0,0],[0, 0, 3], [0, 1,0], [0, 2,4]];
    //let input: number[][] = [[0,0],[0,1,0,0], [0,0,1,0], [0,0,0,1]];
    //let input: number[][] = [[0,0,0,0],[0, 8, 1, 26], [0, 13, 15, 17], [0, 4, 9, 32]];
    //let input: number[][] = [[0,0,0,0],[0, -4, -2, 1], [0, 4, 2, 2], [0, 22, 0, 3]];
    //let input: number[][] = [[0,0,0,0],[0, 1, 0, 0, 0, 0, 22, 0, 0], [0, 0, -1, 0, 0, 0, 0, 0, 0], [0, 0, 0, -1, 0, 0, 0, 0, 0],
     //[0, 0,0, 0, -11, 0, 0, 0, 0], [0, 0, 0, 0, 0, -1,0, 0, 0], [0, 0, 0, 0, 0, 0, -1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0,1]];


    let input: number[][] = [[0,0,0,0],
    [0, 1, 0, 0, 0, 0, 4, 5, 1],
    [0, 4, 0, 6, 0, 0, 1, 0, 9], 
    [0, 7, 0, 0, 4, 3, 2, 1, 8],
    [0, 0, 0, 3, 1, 9, 0, 0, 2], 
    [0, 0, 3, 4, 5, 0, 7, 8, 0], 
    [0, 9, 0, 7, 6, 0, 4, 3, 1], 
    [0, 2, 0, 0, 6, 0, 9, 10, 1], 
    [0, 4, 3, 2, 1, 15, 6, 0, 0]];

    //let input: number[][] = [[0,0],[0,1,0], [0,0,1]];
    /*
    let input: number[][] =  [
        [0, 2, 1, 0, 1],
        [1, 2, 1, 0, 0],
        [1, 0, 0, 0, 1],
        [2, 0, 0, 0, 0],
        [1, 0, 0, 0, 1]];
    */
/*
     let input: number[][] =  [
            [0, 1, 3, 5, 2],
            [0, 22, 31, 15, 3],
            [0, 3, 13, 0, 0],
            [0, 1, 22, 0, 0],
            [0, 1, 0, 0, 1]];
*/

    
    let matriz: MatrizForma1 = new MatrizForma1(m, n);
    matriz.convertirAMatrizForma1(input);

    console.log(" Numero de filas: " + matriz.numeroFilas());
    console.log(" Numero de columnas: " + matriz.numeroColumnas());

    let simetrica=matriz.simetrica();
   console.log("Simetrica: " + simetrica);

   let determinante=matriz.determinante();
   console.log("Determinante: " + determinante);

   let pSilla=matriz.puntoSilla();
   console.log("punto de silla: " + pSilla);

   

}


