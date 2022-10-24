import './index.scss'
import CompHeader from "../../components/Header";
import { useEffect, useState } from 'react';

export default function ImparOuPar(){
    const [parOuImpar, setParOuImpar] = useState('')
    const [numeroAleatorio, setNumeroAleatorio] = useState(Number(0))
    const [jogador, setJogador] = useState(Number(0))
    const [resposta, setResposta ] = useState('')
    
    function calcular(){
        setNumeroAleatorio(Math.floor(Math.random()*10))
    }
    function divPar(){
        setParOuImpar(  'par' )
    }
    function divImpar(){
        setParOuImpar('impar')
    }

    function verificar(){
        calcular()
        const r = jogador + numeroAleatorio;
        console.log(r)
        if(parOuImpar === 'par' && r % 2 === 0){
           setResposta('ganhou')
        }
        else if(parOuImpar === 'impar' && r % 1 === 0){
            setResposta('ganhou')
        }else{
            setResposta('perdeu')
        }
    }
    
    console.log(parOuImpar)
    

    return(
        <main className='comp-impar'>
            <CompHeader/>
            <div className='page-impar'>
                <div className='card-impar'>
                    <h2>Impar ou par </h2>
                    <div>
                        <div>
                            <button onClick={divPar} onChange={e=> setParOuImpar(e.target.value)}>Par</button>
                            <button onClick={divImpar} onChange={e=> setParOuImpar(e.target.value)}>Impar</button>
                        </div>
                        <input type="number" value={jogador} onChange={e => setJogador(e.target.value)}/>
                        <button onClick={verificar}>OK</button>
                        {resposta}
                    </div>
                </div>
            </div>
        </main>
    )
}