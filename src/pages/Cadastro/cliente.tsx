import { Button } from 'react-bootstrap';
import NavBar_ from '../../component'
import './styles.css'

function FormularioCadastroClientes() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
            <div className="topo">   
            <div className="row box">
                <h1>Cadastrar Cliente</h1>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s6">
                            <label htmlFor="Nome">Nome:</label>
                            <input id="Nome" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input id="Sobrenome" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="cpf">CPF:</label>
                            <input id="CPF" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input id="Telefone" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="email">E-mail:</label>
                            <input id="email" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect waves-light botao" type='submit'>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </main>
        </section>
    );
}

export default FormularioCadastroClientes;