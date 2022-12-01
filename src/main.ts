import Entrada from "./utils/entrada";
import Empresa from "./models/empresa";
import CadastroCliente from "./controllers/Cliente/cadastroCliente";
import ListagemClientes from "./controllers/Cliente/listagemClientes";
import UpdateCliente from "./controllers/Cliente/updateCliente";
import DestroyClientes from "./controllers/Cliente/destroyCliente";
import subsidiaria from "./controllers/Subsidiaria/subsidiaria";
import CadastroProduto from "./controllers/Produtos/createProduto";
import UpdateProduto from "./controllers/Produtos/updateProduto";
import getProdutos from "./controllers/Produtos/getProdutos";
import DestroyProdutos from "./controllers/Produtos/deleteProdutos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresas = new subsidiaria();
let execucao = true;
let entrada = new Entrada();
let insub = true;

while (execucao) {
  if (empresas.getEmpresas.length === 0) {
    console.log("Sem Subsidiarias Cadastradas, gostaria de cadastrar uma?");
    let opcao = entrada.receberNumero("1 - Sim   2 - Não");
    switch (opcao) {
      case 1:
        let nome = entrada.receberTexto(
          "Insira a identificação da subsidiaria: "
        );
        let empresa = new Empresa(nome);
        empresas.addSubsid(empresa);
        break;
      case 2:
        !execucao;
        console.log("Até Mais");
        break;
      default:
        console.log("Opção Invalida... Tente Novamente");
    }
  } else {
    console.log("Selecione uma subsidiaria para entrar:");
    let contador = 0;
    empresas.getEmpresas.forEach((sub) => {
      console.log(contador, " - ", sub.nomeSubsidiaria);
      contador++;
    });
    console.log("Ou digite 9999 para cadastrar uma nova Subsidiaria!");
    let escolha = entrada.receberNumero("");
    if (escolha == 9999) {
      let nome = entrada.receberTexto("Insira a identificação da subsidiaria:");
      let empresa = new Empresa(nome);
      empresas.addSubsid(empresa);
    } else if (escolha < empresas.getEmpresas.length && escolha >= 0) {
      insub = true;
      while (insub == true) {
        let selecionada = empresas.getEmpresas[escolha];
        console.log(`Opções:`);
        console.log(`1 - Menu de clientes`);
        console.log(`2 - Menu de Cadastro de Produtos e Serviços`);
        console.log(`3 - Compra de Produtos ou Serviços`);
        console.log(`0 - Sair`);
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        switch (opcao) {
          case 1:
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Consultar Cliente`);
            console.log(`4 - Atualizar um cliente`);
            console.log(`5 - Deletar um cliente`);
            console.log(`0 - Sair`);
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

            switch (opcao) {
              case 1:
                let cadastro = new CadastroCliente(selecionada.getClientes);
                cadastro.cadastrar();
                break;
              case 2:
                let listagem = new ListagemClientes(selecionada.getClientes);
                listagem.listar();
                break;
              case 3:
                let listarum = new ListagemClientes(selecionada.getClientes);
                let cli_nome = entrada.receberTexto(`Insira o Nome: `);
                let cli_cpf = entrada.receberTexto(`Insira o CPF: `);
                listarum.listarum(cli_nome, cli_cpf);
                break;
              case 4:
                let update = new UpdateCliente(selecionada.getClientes);
                update.update(
                  entrada.receberTexto(`Insira o CPF do cliente: `)
                );
                break;
              case 5:
                let deleta = new DestroyClientes(
                  selecionada.getClientes,
                  selecionada
                );
                deleta.destroy(
                  entrada.receberTexto(`Insira o CPF do cliente: `)
                );
                break;
              case 0:
                insub = false;
                console.log(`Até mais`);
                break;
              default:
                console.log(`Operação não entendida :(`);
            }
            break;
          case 2:
            console.log("1 - Produtos");
            console.log("2 - Serviços");
            console.log("0 - Voltar");

            let escolha = entrada.receberNumero("");
            switch (escolha) {
              case 1:
                console.log("1 - Cadastrar um Produto");
                console.log("2 - Alterar um Produto");
                console.log("3 - Ver Produtos Cadastrados");
                console.log("4 - Deletar um Produto");
                console.log("0 - Voltar");
                let op = entrada.receberNumero("");
                switch (op) {
                  case 1:
                    let cadNewProduct = new CadastroProduto(
                      selecionada.getProdutos
                    );
                    cadNewProduct.cadastrar();
                    break;
                  case 2:
                    let updNewProduct = new UpdateProduto(
                      selecionada.getProdutos
                    );
                    let codigo = entrada.receberNumero(
                      "Insira o codigo do pedido: "
                    );
                    updNewProduct.update(codigo.toString());
                    break;
                  case 3:
                    let newListProduct = new getProdutos(
                      selecionada.getProdutos
                    );
                    newListProduct.listar();
                    break;
                  case 4:
                    let newDestProduct = new DestroyProdutos(
                      selecionada.getProdutos,
                      selecionada
                    );
                    let identidade = entrada.receberNumero(
                      "Insira o codigo do pedido: "
                    );
                    newDestProduct.destroy(identidade.toString());
                    break;
                  case 0:
                    break;
                  default:
                    console.log("Invalido...");
                }
                break;

              case 2:
                console.log("1 - Cadastrar um Serviço");
                console.log("2 - Alterar um Serviço");
                console.log("3 - Ver Serviço Cadastrados");
                console.log("4 - Deletar um Serviço");
                console.log("0 - Voltar");
                break;
              case 0:
                break;
              default:
                console.log("Invalido...");
            }
            break;
          case 3:
          //op3
          case 0:
            execucao = false
            insub = false
            break
          default:
            console.log("Tenta novamente, opção Invalida..");
        }
      }
    }
  }
}
