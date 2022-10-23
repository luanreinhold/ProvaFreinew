import { useState } from "react"
import CompHeader from "../../components/Header"
import "./index.scss"

export default function SalarioPage () {
    
    const [JogadorUm, setJogadorUm] = useState('')
    const [JogadorDois, setJogadorDois] = useState('')
   
    const [resposta, setResposta] = useState("")
    const [erro, setErro] = useState()
    
    function jokenpo () {
        try {

            let resultado = 'Jogador Dois Ganhou'

            if(!JogadorDois || !JogadorUm) {
                throw new Error ('Campos não podem ser vazios!')
            }

            if(JogadorUm === 'pedra' && JogadorDois === 'pedra' || JogadorUm === 'tesoura' && JogadorDois === 'tesoura' || JogadorUm === 'papel' && JogadorDois === 'papel') {
                resultado = 'empate'
            }
        
            if(JogadorUm === 'papel' && JogadorDois === 'pedra' || JogadorUm === 'pedra' && JogadorDois === 'tesoura' || JogadorUm === 'tesoura' && JogadorDois === 'papel') {
                resultado = 'Jogador um ganhou!'
            } 
            
           setResposta(resultado)
            
        } catch (err) {
            setErro(err.message)
        }

    }
    

    return (
        
        <main className="Salario-Container">
            
            <CompHeader/>
          
                <section className="boxInformacoes">

                    <h1>Jogo de Jokenpo!</h1>
                    <label>Jogador um qual vai ser a jogada?</label>
                    <input placeholder="jogador um"        value={JogadorUm} onChange={e => setJogadorUm(e.target.value)}/>
                    <label>Jogador dois qual vai ser a jogada?</label>
                    <input placeholder="jogador dois"      value={JogadorDois} onChange={e => setJogadorDois(e.target.value)}/>
                    <button onClick={jokenpo}>Verificar</button>
                    {resposta}
                    {erro}
                </section>
        
        </main>
        
    )
}