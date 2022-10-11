import { useState } from "react"
import CompHeader from "../../components/Header"
import "./index.scss"

export default function SalarioPage () {
    
    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState("")
    
    function calculoSalario () {
        let aumento = salario * bonus / 100;
        let liquido = salario + aumento - desc
        setResposta(liquido)
    }

    return (
        
        <main className="Salario-Container">
            
            <CompHeader/>
          
                <section className="boxInformacoes">
                    <h1>Calcular Salário</h1>
                    <input placeholder="salario"    value={salario} onChange={e => setSalario(Number(e.target.value))}/>
                    <input placeholder="bonus"      value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
                    <input placeholder="desconto"   value={desc} onChange={e => setDesc(Number(e.target.value))}/>
                    <button onClick={calculoSalario}>Verificar</button>
                    {resposta}
                </section>
        
        </main>
        
    )
}