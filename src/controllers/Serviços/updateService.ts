import Produto from "../../models/produto";
import Servico from "../../models/servico";
import Entrada from "../../utils/entrada";
import Update from "../update";

export default class UpdateService extends Update {
  private servico: Array<Servico>;
  constructor(serv: Array<Servico>) {
    super();
    this.servico = serv;
  }
  public update(cod: string): void {
    let entrada = new Entrada();
    let codc = entrada.receberNumero(cod)
    this.servico.filter((ser) => {
      console.log("------------------------------------------------\n\n");
      let result = ser.getCodigo == codc;
      if (result) {
        console.log("Produto encontrado, vamos Atualizar:");
        console.log("1 -  Se deseja Alterar o Nome do Serviço.");
        console.log("2 -  Se deseja Alterar a Descrição do Serviço.");
        console.log("3 -  Se deseja Alterar o Valor do Serviço.");
        console.log("4 -  Se deseja Alterar o Codigo do Serviço.");
        console.log("0 -  Se não deseja alterar nada.");
        console.log("------------------------------------------\n\n");

        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

        switch (opcao) {
          case 1:
            ser.setnome(
              entrada.receberTexto(`Insira o novo nome do Serviço: `)
            );
            console.log("------------------------------------------\n\n");
            break;
          case 2:
            ser.setdesc(entrada.receberTexto(`Insira a nova descrição: `));
            console.log("------------------------------------------\n\n");
          case 3:
            ser.setvalor(entrada.receberTexto(`Insira o novo valor: `));
            console.log("------------------------------------------\n\n");
          case 4:
            ser.setCodigo(entrada.receberNumero(`Insira o novo codigo: `));
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
