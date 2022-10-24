import { useState } from "react"
import CompHeader from "../../components/Header"
import "./index.scss"

export default function SalarioPage () {
        const [estudantes, setEstudantes] = useState()
        const [litrosCafe, setLitrosCafe] = useState()
        const [miliCafe, setMiliCafe] = useState()
        const [resposta, setResposta] = useState()

        function CalculoCafe () {
        }
        

    return (
        
        <main className="Salario-Container">
            
            <CompHeader/>
          
                <section className="boxInformacoes">
                    <h1>Exercicio do café</h1>
                    <input placeholder="cafe"    />
                    <input placeholder="estudantes"      />
                    <input placeholder="ml"      />
                    <button onClick={CalculoCafe}>Verificar</button>
                    {resposta}
                </section>
        
        </main>
        
    )
}