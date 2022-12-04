import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../component'

function Servicos () {
    return (
            <section>
            <header>
                <NavBar_/>
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
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>massagem</td>
                                <td>a especialista andressa faz essa massagem</td>
                                <td>R$20</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}
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
export default Servicos;