class NodoDoble{
    private dato: any;
    private li:NodoDoble;
    private ld:NodoDoble;

    public constructor(dato: any){
        this.dato=dato;
        this.li=null;
        this.ld= null;
    }

    public getDato(): any{
        return this.dato;
    }

    public setDato(dato: any): void{
        this.dato=dato;
    }

    public getLi(): NodoDoble{
        return this.li;
    }

    public setLi(li: NodoDoble): void{
        this.li=li;
    }

    public getLd(): NodoDoble{
        return this.ld;
    }

    public setLd(ld: NodoDoble): void{
        this.ld=ld;
    }
}