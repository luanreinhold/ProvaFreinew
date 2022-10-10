import { useState } from "react";
import CompHeader from "../../components/Header";

import './index.scss'
export default function AcaiPage () {
    const[qtdPeq, setQtdPeq] = useState();
    const[qtdMed, setQtdMed] = useState();
    const[qtdGra, setQtdGra] = useState();
    const[desc, setDesc] = useState(0);
    const [result ,setResult] = useState();


    function calcularAcai () {
        const soma = qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.50 
        const totalcomDesc = (soma / 100) * desc
        const resultado = soma - totalcomDesc
        setResult(resultado)
    }
  
    // setResult(calcularAcai)

    return (
        <main className="comp-acai">
            <CompHeader/>
            <div className="box-acai">
                <h1>Sistema loja de Açai</h1>

                <div className="sla">
                    <label>Açai pequenos:</label>
                    <input type="number" value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>

                </div>

                <div className="sla">
                    <label>Açai medios:</label>
                    <input type="number" value={qtdMed} onChange={e => setQtdMed(Number(e.target.value))}/>
                </div>

                <div className="sla">
                    <label>Açai grande:</label>
                    <input type="number" value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))}/>
                </div>

                <div className="sla">
                    <label>Cupom de desconto:</label>
                    <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
                </div>
               <div className="sla">
                    resultado: {result}
                    <button onClick={calcularAcai}>Calcular</button>
               </div>
               

            </div>
            
        </main>
    )
}