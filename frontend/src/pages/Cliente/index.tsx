import { useState, useCallback, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import NavBar_ from "../../component";
import ICliente from "../../interface";
import { service } from "../../service/servidor";
import "./styles.css";

function Clientes() {
  const [clientes, setCliente] = useState<ICliente[]>([]);
  useEffect(() => {
    getMany();
  });
  async function getMany() {
    const response = await service.get<ICliente[]>(`cliente/achar-cliente`);
    setCliente(response.data);
  }
  const deleteUser = useCallback(async (id: number) => {
    await service
      .delete(`cliente/deletar-cliente/${id}`)
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
        <h1>Clientes</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id:</th>
                <th>Nome:</th>
                <th>Nome Social:</th>
                <th>Gênero:</th>
                <th>CPF:</th>
                <th>Telefone:</th>
                <th>E-mail:</th>
              </tr>
            </thead>
            <tbody>
              {clientes &&
                clientes.map((cliente) => {
                  return (
                    <tr>
                      <td>{cliente.cliente_id}</td>
                      <td>{cliente.cliente_nome}</td>
                      <td>{cliente.cliente_nomeSocial}</td>
                      <td>{cliente.cliente_genero}</td>
                      <td>{cliente.cpf.cpf_valor}</td>
                      <td>
                      {cliente.telefones.map((tel) => {
                        return(
                            <p>({tel.telefone_ddd}) {tel.telefone_numero}</p>
                        )
                      })}
                      </td>
                      <td>{cliente.email}</td>
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

export default Clientes;
