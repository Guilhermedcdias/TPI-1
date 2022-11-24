import Entrada from "./utils/entrada";
import Empresa from "./models/empresa"
import CadastroCliente from "./controllers/Cliente/cadastroCliente";
import ListagemClientes from "./controllers/Cliente/listagemClientes";
import UpdateCliente from "./controllers/Cliente/updateCliente";
import DestroyClientes from "./controllers/Cliente/destroyCliente";
import subsidiaria from "./controllers/subsidiaria/subsidiaria";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresas = new subsidiaria();
let execucao = true
let entrada = new Entrada()
let insub = true


while (execucao) {
    if (empresas.getEmpresas.length === 0) {
        console.log("Sem Subsidiarias Cadastradas, gostaria de cadastrar uma?")
        let opcao = entrada.receberNumero("1 - Sim   2 - Não")
        switch (opcao) {
            case 1:
                let nome = entrada.receberTexto("Insira a identificação da subsidiaria: ")
                let empresa = new Empresa(nome)
                empresas.addSubsid(empresa)
                break
            case 2:
                !execucao
                console.log("Até Mais")
                break
            default:
                console.log("Opção Invalida... Tente Novamente")
        }
    } else {
        console.log("Selecione uma subsidiaria para entrar:")
                let contador = 0
                empresas.getEmpresas.forEach(sub => {
                    console.log(contador, " - ", sub.nomeSubsidiaria)
                    contador++
                })
                console.log("Ou digite 9999 para cadastrar uma nova Subsidiaria!")
                let escolha = entrada.receberNumero("")
                if (escolha == 9999) {
                    let nome = entrada.receberTexto("Insira a identificação da subsidiaria:")
                    let empresa = new Empresa(nome)
                    empresas.addSubsid(empresa)
                } else if (escolha < empresas.getEmpresas.length && escolha >= 0) {
                    insub = true
                    while(insub == true){
                        let selecionada = empresas.getEmpresas[escolha]
                    console.log(`Opções:`);
                    console.log(`1 - Cadastrar cliente`);
                    console.log(`2 - Listar todos os clientes`);
                    console.log(`3 - Consultar Cliente`);
                    console.log(`4 - Atualizar um cliente`);
                    console.log(`5 - Deletar um cliente`)
                    console.log(`0 - Sair`);

                    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                    switch (opcao) {
                        case 1:
                            let cadastro = new CadastroCliente(selecionada.getClientes)
                            cadastro.cadastrar()
                            break;
                        case 2:
                            let listagem = new ListagemClientes(selecionada.getClientes)
                            listagem.listar()
                            break;
                        case 3:
                            let listarum = new ListagemClientes(selecionada.getClientes)
                            let cli_nome = entrada.receberTexto(`Insira o Nome: `)
                            let cli_cpf = entrada.receberTexto(`Insira o CPF: `)
                            listarum.listarum(cli_nome, cli_cpf)
                            break;
                        case 4:
                            let update = new UpdateCliente(selecionada.getClientes)
                            update.update(entrada.receberTexto(`Insira o CPF do cliente: `))
                            break;
                        case 5:
                            let deleta = new DestroyClientes(selecionada.getClientes, selecionada)
                            deleta.destroy(entrada.receberTexto(`Insira o CPF do cliente: `))
                            break;
                        case 0:
                            insub = false
                            console.log(`Até mais`)
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                    }
                    }
                    
                }
    }

}