import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar_ from '../../component'
import { service } from '../../service/servidor';
import './styles.css'

interface cadastroCliente {
    cli_nome: string;
    cli_nomeSocial: string;
    cli_genero: string;
    cli_valor: string;
    cli_cpfDataEmi: string;
    cli_rgValor: string;
    cli_rgDataEmi: string;
    telefone: string;
    email: string
}
function FormularioCadastroClientes() {
    const navigate = useNavigate();
    const registrodocli = useCallback(
        async (data: cadastroCliente) => {
            await service.post<cadastroCliente>(
                'cliente/criar-cliente',
                {
                    cli_nome: data.cli_nome,
                    cli_nomoSocial: data.cli_nomeSocial,
                    cli_genero: data.cli_genero,
                    cli_valor: data.cli_valor,
                    cli_cpfDataEmi: data.cli_cpfDataEmi,
                    cli_rgValor: data.cli_rgDataEmi,
                    cli_rgDataEmi: data.cli_rgDataEmi,
                    telefone: [{
                        telefone_ddd: data.telefone.split(' ')[0],
                        telefone_numero: data.telefone.split(' ')[1],
                    }],
                    email: data.email,
                }
            )
            .then(({ data }) => {
                console.log(data);
                navigate('/clientes');
            })
            .catch(error => {
                console.log(error);
            });
        },
        [],
    )
    
    const onSubmit = useCallback(
        async(data: cadastroCliente) => {
            registrodocli(data)
        }, [registrodocli]
    )

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cadastroCliente>({
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
                <h1>Cadastrar Cliente</h1>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-field col s6">
                            <label htmlFor="Nome">Nome:</label>
                            <input id="Nome" type="text" className="validate" {...register("cli_nome")} />
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input id="Sobrenome" type="text" className="validate" {...register("cli_nomeSocial")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="cpf">CPF:</label>
                            <input id="CPF" type="text" className="validate" {...register("cli_valor")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="rg">RG:</label>
                            <input id="RG" type="text" className="validate" {...register("cli_rgValor")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input id="Telefone" type="text" className="validate" {...register("telefone")}/>
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