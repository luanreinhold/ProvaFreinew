import { useState } from "react";

export default function AcaiPage () {
    const[qtdPeq, setQtdPeq] = useState(0);
    const[qtdMed, setQtdMed] = useState(0);
    const[qtdGra, setQtdGra] = useState(0);
    const[desc, setDesc] = useState(0);
    const [result ,setResult] = useState(0);


    function calcularAcai (qtdPeq, qtdMed, qtdGra, desc ) {
        let soma = (qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.50) 
        let totalcomDesc = (soma / 100) * desc
        return  soma - totalcomDesc
    }
    // setResult(calcularAcai)
    return (
        <main>
            
            <h1>Sistema loja de Açai</h1>

            <div>
                <label>Açais pequenos</label>
                <input type="number" value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>
            </div>

            <div>
                <label>Açais grandes</label>
                <input type="number" value={qtdMed} onChange={e => setQtdMed(Number(e.target.value))}/>
            </div>

            <div>
                <label>Açai grande</label>
                <input type="number" value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))}/>
            </div>

            <div>
                <label>Cupom de desconto</label>
                <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>
            {result}
            <button onClick={calcularAcai}>Calcular</button>

        </main>
    )
}