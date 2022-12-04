import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../component'
import { service } from '../../service/servidor';

interface cadastroProduto{
    prod_nome: string;
    prod_valor: string;
}

function FormularioCadastroProdutos () {

    const navigate = useNavigate();
    const registrodoprod = useCallback(
        async(data: cadastroProduto) => {
            await service.post<cadastroProduto>(
                'produto/criar-produto',
                {
                    prod_nome: data.prod_nome,
                    prod_valor: data.prod_valor,
                }
            )
            .then(({ data }) => {
                console.log(data);
                navigate('/produtos')
            })
            .catch(error => {
                console.log(error)
            });
        },
        [],
    )

    const onSubmit = useCallback(
        async(data:cadastroProduto) => {
            registrodoprod(data)
        }, [registrodoprod]
    )
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cadastroProduto>({
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
                <h1>Cadastrar Produto</h1>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-field col s6">
                            <label htmlFor="Produto">Produto:</label>
                            <input id="Produto" type="text" className="validate" {...register("prod_nome")}/>
                        </div>
                        <br></br>
                        <div className="input-field col s6">
                            <label htmlFor="Preco">Preço:</label>
                            <input id="Preco" type="text" className="validate" {...register("prod_valor")}/>
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

export default FormularioCadastroProdutos; 
