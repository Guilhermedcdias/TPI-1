import Empresa from "../../models/empresa";
import Produto from "../../models/produto";
import Entrada from "../../utils/entrada";
import Destroy from "../destroy";

export default class DestroyProdutos extends Destroy{
    private produtos: Array<Produto>
    private empresa: Empresa
    constructor(produtos: Array<Produto>, empresa: Empresa){
        super()
        this.produtos = produtos
        this.empresa = empresa
    }
    public destroy(identidade: string): void {
        let entrada = new Entrada();
        let cod = entrada.receberNumero(identidade)
        this.produtos.forEach(pro => {
            if (pro.getcodigo == cod) {
                let produto = pro
                this.empresa.removeProdutos(produto)
            }
        })
    }
}