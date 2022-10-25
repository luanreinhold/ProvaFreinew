import { useState } from "react"
import "./index.scss"

import CompHeader from "../../components/Header";




export default function AlunoMedia() {
    const [qtdAlunos, setQtdAlunos] = useState()
    const [alunos, setAlunos] = useState([]);
    const [Aluno, setAluno] = useState([])
    const [media, setMedia] = useState();
    console.log(alunos)

 
    function CriarAluno() {
        try {
            const ar = []
            for (let i = 1; i <= qtdAlunos; i++) {
                ar.push(i)
                setAlunos(ar)
            }
            
        } catch (err) {
            console.log(err)
        }
    }

    function posicao () {
        Aluno[pos] = nota

        setAluno = []
    }   

    
    console.log(notaAluno)
    return (
        <main className="comp-abastecimento">
            <CompHeader />
            <div className="card-1">
                <h1>Calculo de media</h1>
                <div>
                    <label>qtd Alunos</label>
                    <input type="number" value={qtdAlunos} onChange={e => setQtdAlunos(Number(e.target.value))} />


                    <ul>

                        {alunos.map((item, pos) =>
                            <div>Aluno:{item} <input type='text' value={notaAluno} onChange={e=> posicao(e.target.value, pos)}/></div>
                        )}

                    </ul>
                </div>
                

                <div>
                    <label>Media</label>
                
                </div>
                <div>
                    <label>Maior</label>
                    
                </div>
                <div>
                    <label>Menor</label>
                    
                </div>

                <div className="botao">
                    <button onClick={CriarAluno}>calcular</button>
                </div>

            </div>
        </main>
    )
}