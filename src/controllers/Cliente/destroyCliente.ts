import Cliente from "../../models/cliente";
import Empresa from "../../models/empresa";
import Destroy from "../destroy";

export default class DestroyClientes extends Destroy {
    private clientes: Array<Cliente>
    private empresa: Empresa
    constructor(clientes: Array<Cliente>, empresa: Empresa) {
        super()
        this.clientes = clientes;
        this.empresa = empresa;
    }
    public destroy(cli_cpf: string): void {
        this.clientes.forEach(cli => {
            if (cli.getCpf.getValor == cli_cpf) {
                let pessoa = cli
                this.empresa.removeClientes(pessoa)
            }

        })

    }
}
