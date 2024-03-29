import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CustomNavbar from '../src/components/nav-bar/index';

function App() {
  return (
    <div className='App'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <CustomNavbar />
    </div>
    <BrowserRouter>
      <Nav variant='tabs'>
        <Nav.Link as={Link} to='/sobre'>Sobre</Nav.Link>
        <Nav.Link as={Link} to='/alunos'>Adicionar Despesa</Nav.Link>
      </Nav>
      <Routes>
        <Route path='/alunos' element={<Alunos />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
