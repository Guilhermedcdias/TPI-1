export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    //Getters e Setters - DDD
    public get getDdd(): string {
        return this.ddd;
    }
    public setDdd(ddd: string) {
        this.ddd = ddd;
    }

    //Getters e Setters - Numero
    public get getNumero(): string {
        return this.numero;
    }
    public setNumero(numero: string) {
        this.numero = numero;
    }
}