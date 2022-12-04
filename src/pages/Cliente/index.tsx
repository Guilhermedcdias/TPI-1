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
                            <th>CPF:</th>
                            <th>Telefone:</th>
                            <th>E-mail:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Andressa</td>
                                <td>Ginevro</td>
                                <td>501174987-79</td>
                                <td>(12)988775435</td>  
                                <td>dede.gs@gmail.com</td>                                                                                       
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Clientes;