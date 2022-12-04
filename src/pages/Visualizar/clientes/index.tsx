/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

export class VisualizarCliente extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Visualizar cliente: "Gabriela"</h1>
                <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Gabriela Bicho</Card.Title>
                        <Card.Text>
                            Nome Social: Gabriela
                        </Card.Text>
                        <Card.Text>
                            Gênero: Feminino
                        </Card.Text>
                        <Card.Text>
                            CPF: 781.203.203-15
                        </Card.Text>
                        <Card.Text>
                            RG: 21.251.255/01
                        </Card.Text>
                        <Card.Text>
                            Telefone: 12 3962-1949
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
}
};