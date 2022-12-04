import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import NavBar_ from "../../component";
import IServico from "../../interface/serviço";
import { service } from "../../service/servidor";

function Servicos() {
  const [servico, setServico] = useState<IServico[]>([]);
  useEffect(() => {
    getServicos();
  });

  async function getServicos() {
    const response = await service.get<IServico[]>(`/servico/achar-servico`);
    setServico(response.data);
  }

  const deletar = useCallback(async (serv: number) => {
    await service
      .delete(`servico/deletar/${serv}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <h1>Serviços</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id:</th>
                <th>Serviço:</th>
                <th>Descrição:</th>
                <th>Preço:</th>
              </tr>
            </thead>
            <tbody>
              {servico &&
                servico.map((ser) => {
                  return (
                    <tr>
                      <td>{ser.servico_id}</td>
                      <td>{ser.servico_nome}</td>
                      <td>{ser.servico_desc}</td>
                      <td>{ser.servico_valor}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}
export default Servicos;
