import Empresa from "../../models/empresa";
import Produto from "../../models/produto";
import Servico from "../../models/servico";
import Entrada from "../../utils/entrada";
import Destroy from "../destroy";

export default class DestroyServico extends Destroy{
    private servico: Array<Servico>
    private empresa: Empresa
    constructor(servico: Array<Servico>, empresa: Empresa){
        super()
        this.servico = servico
        this.empresa = empresa
    }
    public destroy(identidade: string): void {
        let entrada = new Entrada();
        let cod = entrada.receberNumero(identidade)
        this.servico.forEach(ser => {
            if (ser.getCodigo == cod) {
                let nservico = ser
                this.empresa.removeServiços(nservico)
            }
        })
    }
}