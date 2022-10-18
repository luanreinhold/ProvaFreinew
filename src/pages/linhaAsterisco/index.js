import './index.scss'

import CompHeader from '../../components/Header'
import { useState } from 'react';




export default function LinhaAsterisco(){
    const [qtdPontos, setQtdPontos] = useState();
    const [resposta, setResposta] = useState([]);

    function desenharAsterisco() {
        
        let arraydosPontos = [];

        for(let i = 0; i < qtdPontos; i++){ 
            let asterisco = '*';
            arraydosPontos.push( `${asterisco}`);
            setResposta(arraydosPontos)
        }

    }

    return(
        <main className='page-asterisco'>
            <CompHeader/>
            <div className='box-exercicio'>
                <h1>Desenhar Linha</h1>
                <div>
                    <label>Numero de inicio da contagem </label>
                    <input type="number" value={qtdPontos} onChange={e=> setQtdPontos(Number(e.target.value))}/>
                </div>

                {resposta}
                <br/>
                <button onClick={desenharAsterisco}>Contar</button>
            </div>
        </main>
    )
}