import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { useState, useCallback, useEffect } from "react";

import { Button, Table } from "react-bootstrap";
import NavBar_ from "../../component";
import IProduto from "../../interface/produto";
import { service } from "../../service/servidor";

function Produtos() {
  const [produto, setProduto] = useState<IProduto[]>([]);
  useEffect(() => {
    getProduto();
  });
  async function getProduto() {
    const response = await service.get<IProduto[]>(`/produto/findMany`);
    setProduto(response.data);
  }
  const deletar = useCallback(async (prod: number) => {
    await service
      .delete(`produto/deletar/${prod}`)
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
        <h1>Produtos</h1>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Id:</th>
                <th>Produto:</th>
                <th>Preço:</th>
              </tr>
            </thead>
            <tbody>
              {produto &&
                produto.map((prod) => {
                  return (
                    <tr>
                      <td>{prod.produto_id}</td>
                      <td>{prod.produto_nome}</td>
                      <td>{prod.produto_valor}</td>
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
export default Produtos;
