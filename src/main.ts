import Entrada from "./utils/entrada";
import Empresa from "./models/empresa"
import CadastroCliente from "./controllers/cadastroCliente";
import ListagemClientes from "./controllers/listagemClientes";
import UpdateCliente from "./controllers/updateCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Consultar Cliente`);
    console.log(`4 - Atualizar um cliente`);
    console.log(`5 - Deletar um cliente`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let listarum = new ListagemClientes(empresa.getClientes)
            let cli_nome = entrada.receberTexto(`Insira o Nome: `)
            let cli_cpf = entrada.receberTexto(`Insira o CPF: `)
            listarum.listarum(cli_nome, cli_cpf)
            break;
        case 4:
            let update = new UpdateCliente(empresa.getClientes)
            update.update(entrada.receberTexto(`Insira o CPF do cliente: `))
            break;
        case 5:
            let deleta = null
            //chama metodo
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}