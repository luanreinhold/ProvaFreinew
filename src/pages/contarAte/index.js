import './index.scss'

import CompHeader from '../../components/Header'
import { useState } from 'react'



export default function ContarAte(){
    const [numeroInicio, setNumeroInicio] = useState(0);
    const [numeroFinal, setNumeroFinal] = useState(0);
    const [resposta, setResposta] = useState("");

    function comeca(){
        
    }

    return(
        <main>
            <CompHeader/>
            <div>
                <h1>Contador</h1>
                <div>
                    <label>Numero de inicio da contagem </label>
                    <input type="number" value={numeroInicio} onChange={e=> setNumeroInicio(e.target.value)}/>
                </div>
                <div>
                    <label>Numero final </label>
                    <input type="number" value={numeroFinal} onChange={e=> setNumeroFinal(e.target.value)}/>
                </div>
                {resposta}
                <button>Contar</button>
            </div>
        </main>
    )
}