import { useState } from 'react'
import './index.scss'
import CompHeader from'../../components/Header'



export default function IngressoCinema(){
    const [ inteiras, setInteiras] = useState(0)
    const [ meias, setMeias] = useState(0)
    const [ diaSemana, setDiaSemana] = useState('')
    const [ nacional, setNacional] = useState(false)
    return(
        <main className='page-ingresso'>
            <CompHeader/>
            <div className='card-ingresso'>
                <h1>Compra de ingressos </h1>
                <div>
                    <label>Inteiras</label>
                    <input type="number" value={inteiras} onChange={e=> setInteiras(e.target.value)}/>
                </div>
                <div>
                    <label>Meias</label>
                    <input type="number" value={meias} onChange={e=> setMeias(e.target.value)}/>
                </div>
                <div>
                    <label>Dia Semana</label>
                    <input type="txt" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)}/>
                </div>
                <div>
                    <label>Informe se o filme é nacional</label>
                    <input type="txt" value={nacional} onChange={e=> setNacional(e.target.value)}/>
                </div>
                <button> Calcular</button>
            </div>
        </main>
    )
}