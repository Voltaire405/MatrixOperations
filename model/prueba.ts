//Pruebas




function probar(): void {
    let m = 3;
    let n = 3;
    //let input: number[][] = [[0,0,0,0], [0, 3, 0, 4], [0, 0, 1, 5]];
    //let input: number[][] = [[0,0],[0, 0, 3], [0, 1,0], [0, 2,4]];
    //let input: number[][] = [[0,0],[0,1,0,0], [0,0,1,0], [0,0,0,1]];
    let input: number[][] = [[0,0,0,0],[0, 8, 1, 26], [0, 13, 15, 17], [0, 4, 9, 32]];
    //let input: number[][] = [[0,0,0,0],[0, -4, -2, 1], [0, 4, 2, 2], [0, 22, 0, 3]];
    //let input: number[][] = [[0,0,0,0],[0, 1, 0, 0, 0, 0, 22, 0, 0], [0, 0, -1, 0, 0, 0, 0, 0, 0], [0, 0, 0, -1, 0, 0, 0, 0, 0],
     //[0, 0,0, 0, -11, 0, 0, 0, 0], [0, 0, 0, 0, 0, -1,0, 0, 0], [0, 0, 0, 0, 0, 0, -1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0,1]];
    /*let input: number[][] = [[0,0,0,0],
    [0, 1, 2, 3, 2, 13, 4, 5, 6],
    [0, 4, 5, 6, 3, 12, 1, 5, 9], 
    [0, 7, 8, 9, 4, 13, 2, 1, 8],
    [0, 8, 7, 3, 1, 9, 1, 3, 2], 
    [0, 2, 3, 4, 5, 16, 7, 8, 9], 
    [0, 9, 8, 7, 6, 15, 4, 3, 1], 
    [0, 2, 1, 0, 6, 18, 9, 10, 1], 
    [0, 4, 3, 2, 1, 15, 6, 7, 8]];*/
    //let input: number[][] = [[0,0],[0,1,0], [0,0,1]];
    //let input: number[][] = [[0,0],[0, 1, 3, 5, 9], [0, 1, 3, 1, 7], [0, 4, 30, 0, 7], [0, 5, 1, 1, 0 ]];


    
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


