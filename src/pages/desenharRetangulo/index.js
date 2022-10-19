import './index.scss';

import CompHeader from '../../components/Header';
import { useState } from 'react';

export default function Retangulo(){
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resposta, setResposta] = useState([])

    function desenha(){
        let arr =[];

        for (let linha = 1; linha <= altura; linha++){
            for(let coluna = 1; coluna <= base; coluna++){
               arr.push("* ")
            }
            setResposta(arr)
        }
    }
    return(
        <main>
            <CompHeader/>
            <div>
                <h1>Desenha Retangulo</h1>
                <div>
                    <label> Base </label>
                    <input type="number" value={base} onChange={e => setBase(e.target.value)}/>
                </div>
                <div>
                    <label> Altura </label>
                    <input type="number" value={altura} onChange={e => setAltura(e.target.value)}/>
                </div>
                {resposta}
                <button onClick={desenha}>Executar</button>
            </div>
        </main>
    )
}