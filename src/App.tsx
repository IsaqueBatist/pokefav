import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Login from './pages/login/index.tsx';
import Cadastro from './pages/cadastro/index.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    </Router>
  );
}

export default App;
