import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../component'

function Produtos () {
     return (
            <section>
            <header>
                <NavBar_/>
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
                            <tr>
                                <td>1</td>
                                <td>Shampoo seda</td>
                                <td>R$15</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}
export default Produtos;
