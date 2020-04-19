class MatrizForma1{
    private mat: NodoDoble;

    constructor(m:number, n:number){
        let t:Tripleta= new Tripleta(m, n, null);
        this.mat= new NodoDoble(t);
        t.setValor(this.mat);
        this.mat.setDato(t);
    }

    public nodoCabeza(): NodoDoble{
        return this.mat;
    }

    public primerNodo(): NodoDoble{
        let tp:Tripleta= this.mat.getDato();
        let p:NodoDoble= tp.getValor();
        return p;
    }

    public numeroFilas():number{
        return this.nodoCabeza().getDato().getFila();
    }
    
    public numeroColumnas():number{
        return this.nodoCabeza().getDato().getColumna();
    }

    public esVacia(): boolean{
        let p: NodoDoble= this.primerNodo();
        return (p==this.mat);
    }

    public finDeRecorrido(p: NodoDoble): boolean{
        return (p==this.mat);
    }

    public mostrarMatriz():void{
        let qf, qc, qv, p, q, tq, tp
        p=this.primerNodo();
        while(!this.finDeRecorrido(p)){
            q=p.getLd();
            while(q!=p){
                tq=q.getDato();
                qf=tq.getFila();
                qc=tq.getColumna();
                qv=tq.getValor();
                console.log("\nfila: " + qf +
                "\ncolumna: "+ qc +
                "\nvalor: " +qv);
                q=q.getLd();
            }

            tp=p.getDato();
            p=tp.getValor();
        }

    }

    public construyeNodosCabeza():void{
        let mayor;
        let x: NodoDoble;
        let ultimo: NodoDoble;
        let t: Tripleta;
        
        ultimo=this.nodoCabeza();
        t=ultimo.getDato();
        let m:number=t.getFila();
        let n:number=t.getColumna();
        mayor=m;
        
        if(n>m){
            mayor=n;
        }

        for(let i=1; i<=mayor; i++){
            t= new Tripleta(i, i, this.nodoCabeza());
            x= new NodoDoble(t);
            x.setLd(x);
            x.setLi(x);
            t=ultimo.getDato();
            t.setValor(x);
            ultimo.setDato(t);
            ultimo=x;
        }
    }

    public conectaPorFilas(x: NodoDoble): void{
        let p: NodoDoble;
        let q: NodoDoble;
        let anterior: NodoDoble;
        let tp: Tripleta;
        let tq: Tripleta;
        let tx: Tripleta;
        let i:number;
        
        tx=x.getDato();
        p=this.primerNodo();
        for(let i=1; i<tx.getFila(); i++){
            tp=p.getDato();
            p= tp.getValor();
        }
        anterior=p;
        q=p.getLd();
        tq=q.getDato();
        while((q!=p) && (tq.getColumna()< tx.getColumna())){
            anterior=q;
            q=q.getLd();
            tq=q.getDato();
        }
        anterior.setLd(x);
        x.setLd(q);
    }

    conectaPorColumnas(x: NodoDoble):void{
        let p: NodoDoble;
        let q: NodoDoble;
        let anterior: NodoDoble;
        let tp: Tripleta;
        let tq: Tripleta;
        let tx: Tripleta;
        let i:number;
        
        tx=x.getDato();
        p=this.primerNodo();
        for(let i= 1; i<tx.getColumna(); i++){
            tp=p.getDato();
            p=tp.getValor();
        }

        anterior=p;
        q=p.getLi();
        tq=q.getDato();
        while((q!=p) && (tq.getFila()<tx.getFila())){
            anterior=q;
            q=q.getLi();
            tq=q.getDato();
        }

        anterior.setLi(x);
        x.setLi(q);
    }
    
    /**
     * Convierte un arreglo de dos dimensiones en una matriz en forma 1
     * @param matrizArray Arreglo de dos dimensiones que representa a una matriz 
     */
    public convertirAMatrizForma1(matrizArray: number[][]): void{
        let m=this.numeroFilas();
        let n=this.numeroColumnas();
        this.construyeNodosCabeza();
        
        let valor;
        for(let i=1; i<=m; i++){
            for(let j=1; j<=n; j++){
                valor= matrizArray[i][j];
                if(valor==0){
                    continue;
                }
                let t:Tripleta= new Tripleta(i, j, valor);
                let nodo:NodoDoble= new NodoDoble(t);
                this.conectaPorFilas(nodo);
                this.conectaPorColumnas(nodo);
            }
        }
    }

    public traspuesta(): MatrizForma1{
        let q, tq, tx, x;
        let p=this.nodoCabeza();
        let tp=p.getDato();
        let matrizTraspuesta=new MatrizForma1(tp.getColumna(), tp.getFila());
        matrizTraspuesta.construyeNodosCabeza();
        p=this.primerNodo();

        while(!this.finDeRecorrido(p)){
            q=p.getLd();
            tq=q.getDato();
            while(q!=p){
                tx= new Tripleta(tq.getColumna(), tq.getFila(), tq.getValor());
                x= new NodoDoble(tx);
                matrizTraspuesta.conectaPorFilas(x);
                matrizTraspuesta.conectaPorColumnas(x);
                q=q.getLd();
                tq=q.getDato()
            }
            tp=p.getDato();
            p=tp.getValor();
        }
        return matrizTraspuesta;
    }

    /**
     * Determina si la matriz es simetrica comparandola con su traspuesta
     * @returns booleano con valor true si es simetrica, false de lo contrario
     */
    public simetrica():boolean{

        let p1, p2, q1, q2;
        let tp1, tp2, tq1, tq2;
        let simetrica= true;
        let matrizTraspuesta= this.traspuesta();
        p1=this.primerNodo();
        p2= matrizTraspuesta.primerNodo();

        if(this.numeroFilas()!=this.numeroColumnas()){
            simetrica=false;
        }

        while(!this.finDeRecorrido(p1) && (simetrica==true)){
            q1=p1.getLd();
            q2=p2.getLd();

            while((q1!=p1) || (q2!=p2)){

                //evalua que haya la misma cantidad de elementos diferentes de cero
                //por cada fila en las dos matrices
                if((q1!=p1! && q2==p2) || (q2!=p2 && q1==p1)){
                    simetrica=false;
                }

                //comparación por el numero de la fila, columna y valor de cada nodo
                tq1=q1.getDato();
                tq2=q2.getDato();

                if((tq1.getFila()!=tq2.getFila()) || (tq1.getColumna()!= tq2.getColumna()) || 
                (tq1.getValor()!=tq2.getValor()))simetrica=false;

                q1=q1.getLd();
                q2=q2.getLd();
            }

            tp1=p1.getDato();
            p1= tp1.getValor();
            tp2=p2.getDato();
            p2= tp2.getValor();
        }

        return simetrica;
    }

    public determinante():number{
        if(this.numeroFilas()!=this.numeroColumnas()){
            console.log("m*n");
            return NaN;
        }
        let resultado=0;
        let p=this.primerNodo();
        let q=p.getLd();
        let tq, a;

        //caso base
        if(this.numeroFilas()==1){
            if(q==p)return 0;
            tq=q.getDato();
            resultado=tq.getValor();
            return resultado;
        }

        
        while(q!=p){
            tq=q.getDato();
            a=tq.getValor();
            a=a*(Math.pow(-1,(tq.getFila()+tq.getColumna())));
            let matrizNueva: MatrizForma1=this.matrizNueva(tq.getColumna());
            //console.log(a)
            //to do: a*matriz más pequeña
            resultado+=(a*matrizNueva.determinante());
            q=q.getLd();
        }

        return resultado;
    }

    public matrizNueva(columna: number):MatrizForma1{
        let p, q, tq, tp, tx, x
        let n=this.numeroFilas();
        let matrizNueva:MatrizForma1= new MatrizForma1(n-1, n-1);
        matrizNueva.construyeNodosCabeza();
        p=this.primerNodo();
        tp=p.getDato();
        p=tp.getValor();

        let i=0;
        let j=0;
        while(!this.finDeRecorrido(p)){
            q=p.getLd();
            while(q!=p){
                tq=q.getDato();
                if( tq.getColumna()!=columna){
                    i=tq.getFila()-1;
                    j=tq.getColumna();
                    if(j>columna)j--;
                    tx= new Tripleta(i, j, tq.getValor());
                    x= new NodoDoble(tx);
                    matrizNueva.conectaPorFilas(x);
                    matrizNueva.conectaPorColumnas(x);
                }
                q=q.getLd();
            }
            j=0;
            tp=p.getDato();
            p=tp.getValor();
        }
        /*<console.log("\nmatriz: " + n)
        matrizNueva.mostrarMatriz();
        */

        return matrizNueva;
    }

    /**
     * Calcula el punto de silla 
     * @returns retorna un arreglo de numeros. Si la matriz tiene punto de silla
     * retornará un arreglo en el que la primera posición será un 1 (de lo contrario un -1),
     * los siguiente indices del arreglo corresponden a la fila, columna y valor del punto de silla.
     */
    public puntoSilla(): number[]{
        let respuesta;
        let k, psi, psj, numeroFilas, numeroColumnas;
        let tx, tq, tp;
        let cab, p, q;
        let matriz:MatrizForma1= this.traspuesta();
        cab=matriz.nodoCabeza();
        tx=cab.getDato();
        numeroFilas=tx.getFila();
        numeroColumnas=tx.getColumna();
        psi=0;
        p=matriz.primerNodo();
        while(!matriz.finDeRecorrido(p)){
            tp=p.getDato();
            psi=matriz.filaMenorDato(p, numeroColumnas);
            if(psi!=0){
                q=matriz.primerNodo();
                for(k=1; k<psi; k++){
                   tq=q.getDato();
                   q=tq.getValor(); 
                }
                psj=matriz.columnaMayorDato(q, numeroFilas);
                if(psj==tp.getFila()){
                    respuesta=[1, psi, tp.getFila()];
                    q=p.getLd();
                    while(q!=p){
                        tq=q.getDato();
                        if(tq.getColumna()==psi){
                            respuesta.push(tq.getValor());
                            return respuesta;
                        }
                        q=q.getLd();
                    }
                    respuesta.push(0);
                    return respuesta;
                }
            }
            tp=p.getDato();
            p=tp.getValor();
        }
        respuesta=[0];
        return respuesta;
    }

    /**
     * Busca el menor dato de una fila en particular en la matriz traspuesta de la matriz original
     * @param pp Nodo doble que indica lista ligada de la fila sobre la cual se buscará el menor dato
     * @param nc numero que indica la cantidad de columnas
     */
    public filaMenorDato(pp:NodoDoble, nc:number):number{
        let menor, j, columna, k, p;
        let qq, tx;
        menor=Number.MAX_VALUE;
        columna=0;
        j=0;
        qq=pp.getLd();
        while(qq!=pp){
            j++;
            tx=qq.getDato();
            if(tx.getValor()<menor){
                menor=tx.getValor();
                columna=tx.getColumna();
            }
            qq=qq.getLd();
        }
        k=0;
        qq=pp.getLd();
        while(qq!=pp){
            tx=qq.getDato();
            if(tx.getValor()==menor){
                k++;
            }
            qq=qq.getLd();
        }
        switch(nc-j){
            case 0:if(k==1)return columna;
                break;
            case 1: if(menor<0 && k==1)return columna;
                if(menor<0)return 0;
                qq=pp.getLd();
                tx=qq.getDato();
                p=1;
                while(tx.getColumna()==p){
                    qq=qq.getLd();
                    tx=qq.getDato();
                    p++;
                }
                return p;
            default: if(menor<0 && k==1)return columna;
                break;
        }
        return 0;
    }


    /**
     * Busca el mayor dato de una columna en particular en la matriz traspuesta de la matriz original
     * @param pp Nodo doble que indica lista ligada de la columna sobre la cual se buscará el mayor dato
     * @param nc numero que indica la cantidad de filas
     */
    public columnaMayorDato(pp: NodoDoble, nc:number):number{
        let j, mayor, fila, k, p;
        let qq, tx;
        mayor=Number.MIN_VALUE;
        fila=0;
        j=0;
        qq=pp.getLi();
        while(qq!=pp){
            j++;
            tx=qq.getDato();
            if(tx.getValor()>mayor){
                mayor=tx.getValor();
                fila=tx.getFila();
            }
            qq=qq.getLi();
        }
        k=0;
        qq=pp.getLi();
        while(qq!=pp){
            tx=qq.getDato();
            if(tx.getValor()==mayor){
                k++;
            }
            qq=qq.getLi();
        }
        switch(nc-j){
            case 0: if(k==1)return fila;
                break;
            case 1: if(mayor>0 && k==1)return fila;
                if(mayor>0)return 0;
                qq=pp.getLi();
                tx=qq.getDato();
                p=1;
                while(tx.getFila()==p){
                    qq=qq.getLi();
                    tx=qq.getDato();
                    p++;
                }
                return p;
            default: if(mayor>0 && k==1)return fila;
        }
        return 0;
    }


}

