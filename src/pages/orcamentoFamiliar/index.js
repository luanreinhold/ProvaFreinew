import './index.scss'
import CompHeader from '../../components/Header'
import { useState } from 'react'


export default function OrcamentoFamiliar(){
    const [ ganhos,  setGanhos] = useState(0)
    const [ gastos, setGastos] = useState(0)
    const [ resultado, setResultado] = useState("");

    function calculoGastos () { 
        let porcentagemGasto = gastos / ganhos * 100
        let resposta = " ";
         
    
        if (porcentagemGasto >= 81 && porcentagemGasto < 100)
            resposta = "Cuidado, seu orçamento pode ficar compremetido!"
        else if(porcentagemGasto >= 51 && porcentagemGasto <= 80)
            resposta = "Atenção, melhor conter seus gastos!"
        else if(porcentagemGasto >= 21 && porcentagemGasto <= 50)   
            resposta = "Muito bem! Seus gastos não ultrapassaram metade dos ganhos!"
        else if(porcentagemGasto >= 0 && porcentagemGasto <= 20)   
            resposta = "Parabéns, está gerenciando bem seu orçamento!" 
        else {
            resposta = "Seu orçamento estourou"
        }
    
        setResultado(resposta)
    }
    return(
        <main>
            <CompHeader/>
            <div>
                <h1>Orçamento familiar</h1>
                <div>
                    <label>Ganhos</label>
                    <input type="number" value={ganhos} onChange={e=> setGanhos(e.target.value)}/>
                </div>
                <div>
                    <label>Gastos</label>
                    <input type="number"  value={gastos} onChange={e=> setGastos(e.target.value)}/>
                </div>
                {resultado}
                <button onClick={calculoGastos}>Calcular</button>
            </div>
        </main>
    )
}