import './App.css';
import { Header } from './Components/Header/Header';
import { NewProducts } from './Components/NewProducts/NewProducts';
import Brands from './Components/Brands/Brands';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <div className='content'>
      <Routes>
      <Route path='/NewProducts' element={<NewProducts />} />
      <Route path='/Brands' element={<Brands />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
