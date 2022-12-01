import Cliente from "../../models/cliente";
import Produto from "../../models/produto";
import Entrada from "../../utils/entrada";
import Cadastro from "../cadastro";



export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(prod: Array<Produto>){
        super()
        this.produtos = prod;
        this.entrada = new Entrada()

    }
    public cadastrar(): void {
        console.log("\nInicio do cadastro do Produto");
        let nome = this.entrada.receberTexto("INSIRA O NOME DO PRODUTO: ")
        let marca = this.entrada.receberTexto("INSIRA A MARCA DO PRODUTO: ")
        let valor = this.entrada.receberTexto("INSIRA O VALOR UTILIZANDO NUMEROS E VIRGULA, EX: 10,00")
        let cod = this.entrada.receberNumero("INSIRA O CODIGO DESTE PRODUTO: ")
        let newProduct = new Produto(nome, marca, valor, cod)
        this.produtos.push(newProduct)
        console.log("\nCadastro Concluido :)\n")
    }
}