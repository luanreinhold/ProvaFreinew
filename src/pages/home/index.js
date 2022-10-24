import './index.scss'
import CompHeader from "../../components/Header";
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const Navigate = useNavigate();
    return(
        <main className='comp-home'>
            <CompHeader/>
            <div className='page-home'>
                <div className='card-home'>
                    <h1>Pages Exercicio</h1>
                    <button onClick={()=> Navigate('/acai')}>Açai</button>
                    <button onClick={()=> Navigate('/libra')}>Libra</button>
                    <button onClick={()=> Navigate('/sorveteria')}>Sorveteria</button>
                    <button onClick={()=> Navigate('/abastecimento')}>Abastecimento</button>
                    <button onClick={()=> Navigate('/temperatura')}>Temperatura</button>
                    <button onClick={()=> Navigate('/salario')}>Salario</button>
                    <button onClick={()=> Navigate('/cinema')}>Cinema</button>
                    <button onClick={()=> Navigate('/orcamento')}>Orcamento</button>
                    <button onClick={()=> Navigate('/contar')}>Contar</button>
                    <button onClick={()=> Navigate('/desenharAsterisco')}>Desenhar asterisco</button>
                    <button onClick={()=> Navigate('/retangulo')}>Retangulo</button>
                    <button onClick={()=> Navigate('/imparoupar')}>Impar ou par</button>
                </div>
            </div>
        </main>
    )
}