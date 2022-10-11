import { useState } from "react"
import "./index.scss"

import CompHeader from "../../components/Header";




export default function Abastecimento(){
    const [capacidade, setCapacidade] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [resposta, setResposta] = useState("")

    function calcularDistancia(){
        let x = distancia / consumo ;
        let a = x / capacidade;

        a = Math.ceil(a)
        setResposta(`A quantidade de paradas necessarias sera ${a}`)
    }
    return(
        <main className="comp-abastecimento">
            <CompHeader/>
            <div className="card-1">
                <h1>Calculo de paradas de abastecimento</h1>
                <div>
                    <label>Capacidade</label>
                    <input type="number" value={capacidade} onChange={e=> setCapacidade(e.target.value)}/>
                </div>
                <div>
                    <label>Consumo</label>
                    <input type="number" value={consumo} onChange={e=> setConsumo(e.target.value)}/>
                </div>
                <div>
                    <label>Distancia</label>
                    <input type="number" value={distancia} onChange={e=> setDistancia(e.target.value)}/>
                </div>
                {resposta}
                <div className="botao">
                    <button onClick={calcularDistancia}>calcular</button>
                </div>
                
            </div>
        </main>
    )
}