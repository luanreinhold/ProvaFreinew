import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AcaiPage from "./pages/acaiPage"
import LibraPage from "./pages/libraPage"
import Sorveteria from "./pages/sorveteria"
import Abastecimento from "./pages/abastecimento"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AcaiPage/>} />
        <Route path="/libra" element={<LibraPage/>} />
        <Route path="/sorveteria" element={<Sorveteria/>} />
        <Route path="/abastecimento" element={<Abastecimento/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


