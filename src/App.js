import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Sobre from './Componentes/Sobre/Sobre';
import NotFound from './Componentes/NotFound/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Componentes/Login/Login';
import Produto from './Componentes/Produto/Produto';
import ProdutoDescricao from './Componentes/ProdutoDescricao/ProdutoDescicao'
import Avaliacao from './Componentes/Avaliacao/Avaliacao'
import ProdutoCustom from './Componentes/ProdutoCustom/ProdutoCustom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='produto/:id' element={<Produto />}>
          <Route path='' element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<Avaliacao />} />
          <Route path='produtoCustom' element={<ProdutoCustom />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
