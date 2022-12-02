import Servico from "../../models/servico";
import Listagem from "../listagem";

export default class getServicos extends Listagem {
  private servico: Array<Servico>;
  constructor(serv: Array<Servico>) {
    super();
    this.servico = serv;
  }
  public listar(): void {
    console.log(`\nLista de todos os clientes: `);
    this.servico.forEach((ser) => {
      console.log("Nome do Serviço: " + ser.getnome);
      console.log("Descrição do Serviço: " + ser.getdesc);
      console.log("Valor do Serviço: R$" + ser.getvalor);
      console.log("Codigo do Serviço: " + ser.getCodigo);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`)
  }

  public listarum(ser_cod: number): void {
    this.servico.filter((ser) => {
        let result = ser.getCodigo == ser_cod;
        if (result) {
            console.log("Nome do Serviço: " + ser.getnome)
            console.log("Descrição do Serviço: " + ser.getdesc)
            console.log("Valor do Serviço: R$" + ser.getvalor)
            console.log("Codigo do Serviço: " + ser.getCodigo)
        }
    });
  }
}
