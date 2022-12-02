import Cliente from "../../models/cliente";
import Produto from "../../models/produto";
import Servico from "../../models/servico";
import Entrada from "../../utils/entrada";
import Cadastro from "../cadastro";



export default class CadastroService extends Cadastro {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(serv: Array<Servico>){
        super()
        this.servico = serv;
        this.entrada = new Entrada()

    }
    public cadastrar(): void {
        console.log("\nInicio do cadastro do Produto");
        let nome = this.entrada.receberTexto("INSIRA O NOME DO PRODUTO: ")
        let desc = this.entrada.receberTexto("INSIRA A MARCA DO PRODUTO: ")
        let valor = this.entrada.receberTexto("INSIRA O VALOR UTILIZANDO NUMEROS E VIRGULA, EX: 10,00")
        let cod = this.entrada.receberNumero("INSIRA O CODIGO DESTE PRODUTO: ")
        let newS = new Servico(nome, desc, valor, cod)
        this.servico.push(newS)
        console.log("\nCadastro Concluido :)\n")
    }
}