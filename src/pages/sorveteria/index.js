import { useState } from 'react'
import'./index.scss'
import CompHeader from '../../components/Header'

export  default function Sorveteria(){
    const[gramas, setGramas] = useState();
    const [resultado, setResultado] = useState("");

    function calculoGrama(){
        let total = 0;
        if(gramas >= 1000){
            total = (gramas / 100) * 3.0;
        }else{
            total = (gramas / 100) * 3.5;
        } 
        setResultado(total)
    }
    return(
        <main className='comp-gramas'>
            <CompHeader/>
            <div className='comp'>
                <h1>Sistema Sorveteria</h1>
                <div>
                    <label>Informe a quantidade de sorvete em gramas:  </label>
                    <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/>
                </div> 
                O resultado é:  {resultado}
                <button onClick={calculoGrama}>
                    calcular
                </button>
            </div>
        </main>
    )
}