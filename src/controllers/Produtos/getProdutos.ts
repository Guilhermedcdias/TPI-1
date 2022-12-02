import Produto from "../../models/produto";
import Listagem from "../listagem";

export default class getProdutos extends Listagem {
  private produto: Array<Produto>;
  constructor(produtos: Array<Produto>) {
    super();
    this.produto = produtos;
  }
  public listar(): void {
    console.log(`\nLista de todos os Produtos: `);
    this.produto.forEach((pro) => {
      console.log("Nome do Produto: " + pro.getnome);
      console.log("Marca do Produto: " + pro.getmarca);
      console.log("Valor do Produto: R$" + pro.getvalor);
      console.log("Codigo do Produto: " + pro.getcodigo);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`)
  }

  public listarum(pro_cod: number): void {
    this.produto.filter((pro) => {
        let result = pro.getcodigo == pro_cod;
        if (result) {
            console.log("Nome do Produto: " + pro.getnome)
            console.log("Marca do Produto: " + pro.getmarca)
            console.log("Valor do Produto: R$" + pro.getvalor)
            console.log("Codigo do Produto: " + pro.getcodigo)
        }
    });
  }
}
