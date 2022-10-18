import './index.scss'

import CompHeader from '../../components/Header'
import { useState } from 'react'



export default function ContarAte(){
    const [numeroInicio, setNumeroInicio] = useState();
    const [numeroFinal, setNumeroFinal] = useState();
    const [resposta, setResposta] = useState([]);


    
    function contarNatural () {
        let arr = []
        for(let i = numeroInicio; i <= numeroFinal; i++) {
            arr.push(i + " - ")
            setResposta(arr)
        }
    } 

    return(
        <main className='comp-cont'>
            <CompHeader/>
            <div className='page-card'>
                <div className='card'>
                    <h1>Contador</h1>
                    <div className='box-text'>
                        <label>Numero de inicio da contagem: </label>
                        <input type="number" value={numeroInicio} onChange={e=> setNumeroInicio(Number(e.target.value))}/>
                    </div>
                    <div className='box-text'>
                        <label>Numero final: </label>
                        <input type="number" value={numeroFinal} onChange={e=> setNumeroFinal(Number(e.target.value))}/>
                    </div>
                    <div className='resposta'>{resposta}</div>
                    <button onClick={contarNatural}>Contar</button>
                </div>
            </div>
        </main>
    )
}