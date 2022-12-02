import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public setCpf(valor: string, data: Date) {
        this.cpf.setCpf(valor);
        this.cpf.setDataEmissao(data) 
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public setRgs(Atual: RG, valor: string, dataEmissao: Date){
        this.rgs.forEach(element => {
            if (element == Atual){
                element.setValor(valor);
                element.setDataEmissao(dataEmissao);
            }
        });        
    }
    public setTelefones(Atual: Telefone, ddd: string, numero: string){
        this.telefones.forEach(element => {
            if (element == Atual){
                element.setDdd(ddd);
                element.setNumero(numero);
            }
        });        
    }
    public addPhone(ddd: string, tel: string){
        var newtel = new Telefone(ddd, tel);
        this.telefones.push(newtel)
    }
    public addRG(valor: string, dataEmissao: Date){
        var newRG = new RG(valor, dataEmissao);
        this.rgs.push(newRG)
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public addServiço(serv: Servico){
        this.servicosConsumidos.push(serv)
    }
    public addProduto(prod: Produto){
        this.produtosConsumidos.push(prod)
    }
    public removeServiço(serv: number){
        const nservices = this.servicosConsumidos.filter(s => {
            s.getCodigo != serv
        })

        this.servicosConsumidos = nservices
    }
    public removeProduto(prod: number){
        const nproducts = this.produtosConsumidos.filter(p => {
            p.getcodigo != prod
        })

        this.produtosConsumidos = nproducts
    }
}