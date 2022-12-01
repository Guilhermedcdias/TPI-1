import Produto from "../../models/produto";
import Entrada from "../../utils/entrada";
import Update from "../update";

export default class UpdateProduto extends Update {
  private produtos: Array<Produto>;
  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }
  public update(cod: string): void {
    let entrada = new Entrada();
    let codc = entrada.receberNumero(cod)
    this.produtos.filter((pro) => {
      console.log("------------------------------------------------\n\n");
      let result = pro.getcodigo == codc;
      if (result) {
        console.log("Produto encontrado, vamos Atualizar:");
        console.log("1 -  Se deseja Alterar o Nome do Produto.");
        console.log("2 -  Se deseja Alterar a Marca do Produto.");
        console.log("3 -  Se deseja Alterar o Valor do Produto.");
        console.log("4 -  Se deseja Alterar o Codigo do produto.");
        console.log("0 -  Se não deseja alterar nada.");
        console.log("------------------------------------------\n\n");

        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

        switch (opcao) {
          case 1:
            pro.setnome(
              entrada.receberTexto(`Insira o novo nome do produto: `)
            );
            console.log("------------------------------------------\n\n");
            break;
          case 2:
            pro.setmarca(entrada.receberTexto(`Insira a nova marca: `));
            console.log("------------------------------------------\n\n");
          case 3:
            pro.setvalor(entrada.receberTexto(`Insira o novo valor: `));
            console.log("------------------------------------------\n\n");
          case 4:
            pro.setcodigo(entrada.receberNumero(`Insira o novo codigo: `));
            console.log("------------------------------------------\n\n");
          case 0:
            break;
          default:
            console.log(`Opção Invalida, tente novamente...`)
        }
      }
    });
  }
}
