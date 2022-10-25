import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AcaiPage from "./pages/acaiPage"
import LibraPage from "./pages/libraPage"
import Sorveteria from "./pages/sorveteria"
import Abastecimento from "./pages/abastecimento"
import Temperatura from "./pages/febrePage"
import SalarioPage from './pages/salarioPage';
import IngressoCinema from './pages/ingressoCinema';
import OrcamentoFamiliar from './pages/orcamentoFamiliar';
import ContarAte from './pages/contarAte';
import Desenhar from './pages/linhaAsterisco'
import Retangulo from './pages/desenharRetangulo';
import Home from './pages/home';
import ImparOuPar from './pages/imparOuPar';
import Jokenpo from './pages/jokenpo'
import AlunoMedia from './pages/AlunosMedia';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/acai" element={<AcaiPage/>} />
        <Route path="/libra" element={<LibraPage/>} />
        <Route path="/sorveteria" element={<Sorveteria/>} />
        <Route path="/abastecimento" element={<Abastecimento/>}/>
        <Route path="/temperatura" element={<Temperatura/>}/>
        <Route path="/salario" element={<SalarioPage/>}/>
        <Route path="/cinema" element={<IngressoCinema/>}/>
        <Route path="/orcamento" element={<OrcamentoFamiliar/>}/>
        <Route path="/contar" element={<ContarAte/>}/>
        <Route path="/desenharAsterisco" element={<Desenhar/>}/>
        <Route path="/Retangulo" element={<Retangulo/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/imparoupar" element={<ImparOuPar/>}/>
        <Route path="/Jokenpo" element={<Jokenpo/>}/>
        <Route path="/Media" element={<AlunoMedia/>}/>
  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


