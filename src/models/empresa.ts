import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    public nomeSubsidiaria: string
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(nome: string){
        this.nomeSubsidiaria = nome
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public addClientes(cliente: Cliente){
        this.clientes.push(cliente)
    }
    public addProdutos(produto: Produto){
        this.produtos.push(produto)
    }
    public addServiços(servico: Servico){
        this.servicos.push(servico)
    }
    public removeClientes(cliente: Cliente){
        const newClientes = this.clientes.filter(cli => {
            cli !== cliente
        });

        this.clientes = newClientes
        return this.clientes
    }
    public removeProdutos(produto: Produto){
        const newProdutos = this.produtos.filter(pro => {
            pro !== produto
        });

        this.produtos = newProdutos
        return this.produtos
    }
    public removeServiços(servico: Servico){
        const newServicos = this.servicos.filter(ser => {
            ser !== servico
        });

        this.servicos = newServicos
        return this.servicos
    }
}