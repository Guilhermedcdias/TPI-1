import { Component } from 'react';
import Navbar_ from '../../component';
import './styles.css'

export class Home extends Component {
    render(){

        return (
            <section>
           <header>
               <Navbar_/>
           </header>
           <main>
               <div className="text">
                   <h1>Bem vindo ao site do Salão WB</h1>
               </div>
           </main>
       </section>
    );
}
}