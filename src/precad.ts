import CadastroCliente from "./controllers/Cliente/cadastroCliente";
import CadastroProduto from "./controllers/Produtos/createProduto";
import CadastroService from "./controllers/Serviços/createService";
import subsidiaria from "./controllers/Subsidiaria/subsidiaria";
import Empresa from "./models/empresa";

export default class Precad {
  public cadastre(empresas: subsidiaria): void {
    let empresa = new Empresa("Pré Cadastrada")
    empresas.addSubsid(empresa)
    let nomes =
      "Miguel Arthur Théo Heitor Gael Davi Bernardo Gabriel Ravi Noah Samuel Pedro Benício Benjamin Matheus Isaac Anthony Joaquim Lucas Lorenzo Rafael Nicolas Henrique Murilo João Miguel Lucca Guilherme Henry Bryan Gustavo Felipe Pietro Levi Daniel João Pedro Bento Vicente Leonardo Caleb Pedro Henrique Matteo Enzo Gabriel João Antônio Emanuel Enzo Davi Lucca Caio Eduardo João Lucas Thomas Cauã Vitor José Enrico Augusto João Gabriel Francisco Otávio Yuri Valentim Vinícius Davi Lucas Rael Mathias Theodoro Yan João Guilherme Nathan Arthur MiguelOliver Anthony Gabriel Ryan Luiz Miguel Erick João Vitor Luan Thiago Apollo Ícaro Breno Arthur Gabriel Derick Kauê Martin Luiz Felipe Raul Liam Davi Miguel Pedro Lucas José Miguel Josué".split(
        " "
      );
    for (let i = 0; i <= 40; i++) {
      if (i < 10 && i > 0) {
        var dia = parseInt("0" + i.toString());
        var mes = parseInt("0" + i.toString());
        var ano = parseInt("2022");
      } else if (i == 0 || i == 10) {
        var dia = parseInt("01");
        var mes = parseInt("10");
        var ano = parseInt("2022");
      } else {
        var subt = i - 9;
        var dia = parseInt("0" + (i - subt).toString());
        var mes = parseInt("0" + (i - subt).toString());
        var ano = parseInt((2025 - i).toString());
      }
      var valor = (i * 10).toString();
      let cadastro = new CadastroCliente(empresa.getClientes);
      cadastro.cads(dia, mes, ano, valor, (nomes[i] + " "+ nomes[i+1]), nomes[i+5]);
    }
    for (let i = 1; i<=12; i++){
        let produtos = 
        'Nescau,Chocolate,Cerveja,Pipoca,Leite Condesado,Água,Leite,Ovo Maltina,Ovo,Macarrão,Alcool,Desinfetante,Escova,Pasta de Dente,Pano,Vassoura,Vodka,Corote,Gin,Whisky,Suco,Copão,Sacos Plasticos,Papel,Tinta,Creme de Barbear'.split(",")
        let marcas = 
        'Sem Marca,Nestle,Yoki,Veja,Iana Ovos,Lacta,Dona Jura,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca,Sem Marca'.split(",")

        
        var cadastroProd = new CadastroProduto(empresa.getProdutos)
        cadastroProd.cads(produtos[i], marcas[i], (i*10).toString(), i)
    }
    for (let i = 1; i <=5; i++){
        var servicos = 'Esfoliação de rosto, Esfoliação de Corpo, Tratamento De Rejuvelhecimento, Tratamento de Caspa, Depilação a Laser'.split(", ")
        var desc = 'Tratamento Facial, Tratamento Corporal, Tratamento de Pele, Tratamento de Cabelos, Tratamento Estético Corporal'.split(", ")

        var cadastros = new CadastroService(empresa.getServicos)
        cadastros.cads(servicos[i-1], desc[i- 1], (i*100).toString(), i)
    }
  }
}
