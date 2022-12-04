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
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo seda</td>
                                <td>R$15</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Remover</Button>{' '}
                                    </div>
                                </td>    
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}
export default Produtos;
