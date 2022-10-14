import './index.scss'
import CompHeader from '../../components/Header'
import { useState } from 'react'


export default function OrcamentoFamiliar(){
    const [ ganhos,  setGanhos] = useState(0)
    const [ gastos, setGastos] = useState(0)
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
                <button>Calcular</button>
            </div>
        </main>
    )
}