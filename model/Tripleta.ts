class Tripleta{
    private fila:number;
    private columna:number;
    private valor:any;

    constructor(fila: number, columna: number, valor: any){
        this.fila=fila;
        this.columna=columna;
        this.valor=valor;
    }

    public setFila(fila:number):void{
        this.fila=fila;
    }

    public setColumna(columna:number):void{
        this.columna=columna;
    }

    public setValor(valor: any): void{
        this.valor=valor;
    }

    public getFila():number{
        return this.fila;
    }

    public getColumna():number{
        return this.columna;
    }

    public getValor():any{
        return this.valor;
    }


}