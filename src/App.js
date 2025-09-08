import './App.css';
import { Header } from './Components/Header/Header';
import { NewProducts } from './Components/NewProducts/NewProducts';
import Brands from './Components/Brands/Brands';
import Mens from './Components/Mens/Mens';
import Womens from './Components/Womens/Womens';
import Accessories from './Components/Accessories/Accessories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
 

  return (
    <BrowserRouter>
    <div>
      <Header />
      <div className='content'>
      <Routes>
      <Route path='/NewProducts' element={<NewProducts newProductsData={props.newProductsData} commentData={props.commentData}   />} />
      <Route path='/Brands' element={<Brands />} />
      <Route path='/Mens' element={<Mens mensData={props.mensData} />} />
      <Route path='/Womens' element={<Womens />} />
      <Route path='/Accessories' element={<Accessories />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
