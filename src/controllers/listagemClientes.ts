import Cliente from "../models/cliente";
import CPF from "../models/cpf";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarum(cli_nome: string, cli_cpf: string): void {
        this.clientes.forEach(cli => {
            if (cli.getCpf.getValor == cli_cpf) {
                if (cli.nome.toLocaleLowerCase() == cli_nome.toLocaleLowerCase())
                console.log(`Nome: ` + cli.nome);
                console.log(`Nome Social: ` + cli.nomeSocial);
                console.log(`CPF: ` + cli.getCpf.getValor);
                console.log(`-----------------------------------`);
            }
        });
    }
}