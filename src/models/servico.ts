export default class Servico {
    public nome!: string
    private desc!: string
    private valor!: string
    private codigo!: Number
    constructor(nome: string, desc: string, valor: string, codigo: Number){
        this.nome = nome
        this.desc = desc
        this.valor = valor
        this.codigo = codigo
    }

    public get getnome(): string{
        return this.nome
    }
    public get getdesc(): string{
        return this.desc
    }
    public get getvalor(): string{
        return this.valor
    }
    public get getCodigo(): Number{
        return this.codigo
    }
    public setnome(nome: string){
        this.nome = nome
    }
    public setdesc(desc: string){
        this.desc = desc
    }
    public setvalor(valor: string){
        this.valor = valor
    }
    public setCodigo(cod: Number){
        this.codigo = cod
    }
}