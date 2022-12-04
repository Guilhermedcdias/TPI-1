import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../component'
import './styles.css'

function Clientes () {
    return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Clientes</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id:</th>
                            <th>Nome:</th>
                            <th>Sobrenome:</th>
                            <th>Nome Social:</th>
                            <th>Genero:</th>
                            <th>CPF:</th>
                            <th>RG:</th>
                            <th>Telefone:</th>
                            <th>E-mail:</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Andressa</td>
                                <td>Ginevro</td>
                                <td>Andressa</td>
                                <td>Feminino</td>
                                <td>501174987-79</td>
                                <td>56.902.567-6</td>
                                <td>(12)988775435</td>  
                                <td>dede.gs@gmail.com</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_cliente/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>
                                                  
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success" href='/editar_cliente/1'>Editar</Button>{' '}
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
export default Clientes;