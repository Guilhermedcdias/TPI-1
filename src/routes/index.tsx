import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import Clientes from '../pages/Cliente';
import Produtos from '../pages/Produto';
import Servicos from '../pages/Servico';
import Consumos from '../pages/Consumos/Consumos';
import FormularioCadastroClientes from '../pages/Cadastro/cliente';
import FormularioCadastroProdutos from '../pages/Cadastro/produto';
import FormularioCadastroServicos from '../pages/Cadastro/servico';

function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/consumos' element={<Consumos/>}/>
                <Route path='/cadastrar_cliente' element={<FormularioCadastroClientes/>}/>
                <Route path='/cadastrar_produto' element={<FormularioCadastroProdutos/>}/>
                <Route path='/cadastrar_servico' element={<FormularioCadastroServicos/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;