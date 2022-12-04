import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


export default class Navbar_ extends Component {
    render(){

        return (
            <>
            <Navbar  expand = "lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="right">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/cadastrar_cliente">Cliente</NavDropdown.Item>
                            <NavDropdown.Item href="/cadastrar_produto">Produto</NavDropdown.Item>
                            <NavDropdown.Item href="/cadastrar_servico">Serviço</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/clientes">Clientes</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                        <Nav.Link href="/servicos">Serviços</Nav.Link>
                        <Nav.Link href="/consumos">Consumos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    }
}
