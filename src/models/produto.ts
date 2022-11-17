export default class Produto {
    public nome!: string
    private marca!: string
    private valor!: string
    private codigo!: string

    constructor(nome: string, marca: string, valor:string, codigo:string){
        this.codigo = codigo;
        this.nome = nome;
        this.marca = marca;
        this.valor = valor;
    }


    public get getnome(): string{
        return this.nome
    }
    public get getcodigo(): string {
        return this.codigo
    }
    public get getvalor(): string{
        return this.valor
    }
    public get getmarca(): string{
        return this.marca
    }
    public setnome(nome: string){
        this.nome = nome
    }
    public setcodigo(codigo: string){
        this.codigo = codigo
    }
    public setmarca(marca: string){
        this.marca = marca
    }
    public setvalor(valor: string){
        this.valor = valor
    }
}