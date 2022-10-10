import { useState } from "react"
import CompHeader from "../../components/Header"
import "./index.scss"

export default function LibraPage () {
    
    const [mes, setMes] = useState("")
    const [dia, setDia] = useState(0)
    const [resposta, setResposta] = useState("")
    
    function verificarLibra () {
    
        if((mes === "setembro" && dia >= 23 && dia <= 30) || (mes === "outubro" && dia <= 22 )) {
            return setResposta("É libra")
        } else {
            return setResposta("Não é libra")
        }
    }

    return (
        
        <main className="libraPage">
            
            <CompHeader/>
          
                <section className="boxLibra">
                    <h1>Verificar Signo</h1>
                    <input placeholder="mes" value={mes} onChange={e => setMes(e.target.value.toLowerCase())}/>
                    <input placeholder="dia" value={dia} onChange={e => setDia(Number(e.target.value))}/>
                    <button onClick={verificarLibra}>Verificar</button>
                    {resposta}
                </section>
        
        </main>
        
    )
}