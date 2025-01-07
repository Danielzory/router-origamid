import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Sobre from './Componentes/Sobre/Sobre';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
