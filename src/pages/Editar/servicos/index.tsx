import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component'

function EditarServico () {
    return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <div className="topo">   
            <div className="row box">
            <h1>Editar Serviço: Massagem</h1>
                <Button  variant="outline-dark" href='/Servicos'>Voltar</Button>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s6">
                            <label htmlFor="Servico">Serviço:</label>
                            <input id="Servico" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Descricao">Descrição do Serviço:</label>
                            <input id="Descricao" type="text" className="validate" />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Preco">Preço:</label>
                            <input id="Preco" type="text" className="validate" />
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
    )
}
export default EditarServico;