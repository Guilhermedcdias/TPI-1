/* eslint-disable react/jsx-pascal-case */
import { Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import  NavBar_  from '../../../component/NavBar'

export class Consumos extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Consumos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Listagem 10 clientes que mais consumiram em qtd</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem todos clientes por gênero</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem geral de produtos e serviços mais consumidos</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem 10 clientes que menos consumiram produtos ou serviços</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem 5 clientes que mais consumiram em valor</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>      
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
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
}