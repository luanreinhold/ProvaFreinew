import { useState } from 'react'
import './index.scss'
import CompHeader from'../../components/Header'



export default function IngressoCinema(){
    const [ inteiras, setInteiras] = useState(0)
    const [ meias, setMeias] = useState(0)
    const [ diaSemana, setDiaSemana] = useState('')
    const [ resultado, setResultado] = useState(0)
    const [ nacional, setNacional] = useState(false)


    function calculoIngresso () {
        let total;
        
        if(nacional === true) {
             total = (inteiras + meias) * 5
        }
        else if (diaSemana === "quarta-feira")
        {
            total = (inteiras + meias) * 14.25 
        }
        else
        {
            total = inteiras * 28.50 + meias * 14.25        
        }
        
        setResultado(total)
    }

    return(
        <main className='page-ingresso'>
            <CompHeader/>
            <div className='card-ingresso'>
                <h1>Compra de ingressos </h1>
                <div>
                    <label>Inteiras</label>
                    <input type="number" value={inteiras} onChange={e => setInteiras(Number(e.target.value))}/>
                    {inteiras}
                </div>
                <div>
                    <label>Meias</label>
                    <input type="number" value={meias} onChange={e=> setMeias(Number(e.target.value))}/>
                    {meias}
                </div>
                <div>
                    <label>Dia Semana</label>
                    <input type="txt" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)}/>
                    {diaSemana}
                </div>
                <div>
                    <label>Informe se o filme é nacional</label>
                    <input type="checkbox" checked={nacional} onChange={e=> setNacional(e.target.checked)}/>
                </div>
                <button onClick={calculoIngresso}> Calcular</button>
                {resultado}
            </div>
        </main>
    )
}