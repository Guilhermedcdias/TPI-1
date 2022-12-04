import { Button } from 'react-bootstrap';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../component'
import { service } from '../../service/servidor';
import { useForm } from 'react-hook-form';

interface cadastroServico{
    nome_Servico: string,
    desc_Servico: string,
    preco_Servico: string
}
function FormularioCadastroServicos () {
    const navigate = useNavigate()
    const cadastroServico = useCallback(
        async (data: cadastroServico) => {
            await service.post<cadastroServico>('servico/criar-servico', {
                nome_Servico: data.nome_Servico,
                desc_Servico: data.desc_Servico,
                preco_Servico: data.preco_Servico,
            })
            .then(({ data }) => {
                console.log(data);
                navigate('/servicos')
            })
            .catch(error => {
                console.log(error)
            })
        },
        [],
    )
    const onSubmit = useCallback(
        async (data: cadastroServico) => {
            cadastroServico(data)
        }, [cadastroServico]
    )
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cadastroServico>({
        mode: 'onBlur',
    });
    return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
            <div className="topo">   
            <div className="row box">
                <h1>Cadastrar Serviço</h1>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-field col s6">
                            <label htmlFor="Servico">Serviço:</label>
                            <input id="Servico" type="text" className="validate" {...register("nome_Servico")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Descricao">Descrição do Serviço:</label>
                            <input id="Descricao" type="text" className="validate" {...register("desc_Servico")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Preco">Preço:</label>
                            <input id="Preco" type="text" className="validate" {...register("preco_Servico")}/>
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
export default FormularioCadastroServicos;