import { useState} from "react"
import CompHeader from "../../components/Header"

import "./index.scss"

export default function FebrePage () {
    
    const [temperatura, setTemperatura] = useState(0)
    const [status, setStatus] = useState("")

     function verificarTemperatura() {

        if(!temperatura) {
            throw new Error ("Digite um numero válido")
        }
        if(isNaN(temperatura)) 
            throw new Error ("Digite um número")

        if(temperatura >= 41) {
            setStatus("Hipertermia")
        }
        if(temperatura >= 39.6 && temperatura < 41) {
            setStatus("Febre Alta")
        }
        if(temperatura >= 37.6 && temperatura < 39.6) {
            setStatus("Febre")
        }
        if(temperatura >= 36 && temperatura < 37.6) {
            setStatus("Normal")
        }
        if(temperatura < 36) {
            setStatus("Hipotermia")
        } 
    }



    return (
        
        <main className="temperaturaPage">
            
            <CompHeader/>

                <div className="container">
                    <section className="boxTemperatura">
                        
                        <h1>Verificar Temperatura</h1>
                            <input placeholder="tempetatura" value={temperatura} onChange={e => setTemperatura(e.target.value)}/>
                            <button onClick={verificarTemperatura}>Verificar</button>
                        <div>
                            <span>Seu estado é: </span> <b>{status}</b>
                        </div>
                       
                       {status === "Febre" && 
                            <div className="section-img">
                                <img src='./febre-icon.png' alt='icon-febre' />
                            </div>
                       }
                        {status === "Febre alta" && 
                            <div className="section-img">
                                <img src='./febre-icon.png' alt='icon-febre' />
                            </div>
                       }
                        {status === "Hipertermia" && 
                            <div className="section-img">
                                <img src='./febre-icon.png' alt='icon-febre' />
                            </div>
                       }
 
                    </section>
                </div>

        
        </main>
        
    )
}