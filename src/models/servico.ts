export default class Servico {
    public nome!: string
    private desc!: string
    private valor!: string

    public get getnome(): string{
        return this.nome
    }
    public get getdesc(): string{
        return this.desc
    }
    public get getvalor(): string{
        return this.valor
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
}